const findInElements = (elements, matchingID) => {
  function searchTree(element, matchingID) {
    if (element.id === matchingID) {
      return element;
    } else if (element.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < element.children.length; i++) {
        result = searchTree(element.children[i], matchingID);
      }
      return result;
    }
    return null;
  }

  let el;
  for (let i = 0; el === undefined && i < elements.length; i++) {
    let found = searchTree(elements[i], matchingID);
    if (found) {
      el = found;
    }
  }

  return el;
};

export default findInElements;
