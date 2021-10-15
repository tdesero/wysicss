const findParentAndIndexInElements = (elements, matchingID) => {
  function searchTree(element, matchingID) {
    if (
      element.children &&
      element.children.find((el) => el.id === matchingID)
    ) {
      const idx = element.children.findIndex((el) => el.id === matchingID);
      return { parent: element, index: idx };
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

export default findParentAndIndexInElements;
