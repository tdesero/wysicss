import { createContext, Component } from "react";
import findInElements from "./helpers/findInElements";
import findParentAndIndexInElements from "./helpers/findParentAndIndexInElements";
import ID from "./helpers/id";
import deepClone from "./helpers/deepClone";
import makeSafeForCSS from "./helpers/safeClassName";
import {
  DEFAULT_ELEMENTS,
  DEFAULT_CLASSNAMES,
  MOVE_ELEMENT_POSITION,
} from "./constants";

export const Context = createContext();

export class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.addClassName = this.addClassName.bind(this);
    this.removeClassName = this.removeClassName.bind(this);
    this.updateClassText = this.updateClassText.bind(this);
    this.updateClassProperty = this.updateClassProperty.bind(this);
    this.setCurrentActive = this.setCurrentActive.bind(this);
    this.addClassToElement = this.addClassToElement.bind(this);
    this.removeClassFromElement = this.removeClassFromElement.bind(this);
    this.addChildToElement = this.addChildToElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.changeElementText = this.changeElementText.bind(this);
    this.changeElementSrc = this.changeElementSrc.bind(this);
    this.updatePseudoClass = this.updatePseudoClass.bind(this);
    this.changeElementTag = this.changeElementTag.bind(this);
    this.getClassByName = this.getClassByName.bind(this);
    this.moveElement = this.moveElement.bind(this);
    this.cloneElement = this.cloneElement.bind(this);
    this.importJSON = this.importJSON.bind(this);
    this.moveElementFromTo = this.moveElementFromTo.bind(this);

    this.state = {
      currentActive: undefined,
      classNames: DEFAULT_CLASSNAMES,
      elements: DEFAULT_ELEMENTS,

      // methods
      addClassName: this.addClassName,
      removeClassName: this.removeClassName,
      updateClassText: this.updateClassText,
      updateClassProperty: this.updateClassProperty,
      setCurrentActive: this.setCurrentActive,
      addClassToElement: this.addClassToElement,
      removeClassFromElement: this.removeClassFromElement,
      addChildToElement: this.addChildToElement,
      removeElement: this.removeElement,
      changeElementText: this.changeElementText,
      changeElementSrc: this.changeElementSrc,
      updatePseudoClass: this.updatePseudoClass,
      changeElementTag: this.changeElementTag,
      moveElement: this.moveElement,
      moveElementFromTo: this.moveElementFromTo,
      cloneElement: this.cloneElement,
      importJSON: this.importJSON,

      //getters
      getClassByName: this.getClassByName,
    };
  }

  addClassName(className) {
    if (this.state.classNames.findIndex((c) => c.name === className) > -1) {
      return;
    }
    const newClassObj = { name: makeSafeForCSS(className), txt: "" };
    const newClassNames = [...this.state.classNames, newClassObj];
    this.setState({ classNames: newClassNames });
    return newClassObj;
  }

  removeClassName(className) {
    const newClassNames = [...this.state.classNames];
    const index = newClassNames.indexOf(className);
    if (index > -1) {
      newClassNames.splice(index, 1);
    }
    this.setState({ classNames: newClassNames });
  }

  updateClassText(classNameObj, txt) {
    if (!classNameObj) return;
    const newClassNames = [...this.state.classNames];
    const index = newClassNames.findIndex(
      (el) => classNameObj.name === el.name
    );
    if (index > -1) {
      newClassNames[index] = { ...newClassNames[index], txt };
    }
    this.setState({ classNames: [...newClassNames] });
  }

  updateClassProperty(classNameObj, property, value, unit = "") {
    if (!classNameObj) return;
    const newClassNames = [...this.state.classNames];
    const index = newClassNames.findIndex(
      (el) => classNameObj.name === el.name
    );
    if (index > -1) {
      newClassNames[index] = {
        ...newClassNames[index],
        properties: {
          ...newClassNames[index].properties,
          [property]: { value, unit },
        },
      };
    }
    this.setState({ classNames: [...newClassNames] });
  }

  setCurrentActive(el) {
    if (el) {
      this.setState({ currentActive: el });
    } else {
      this.setState({ currentActive: false });
    }
  }

  addClassToElement(id, className) {
    const elements = [...this.state.elements];
    const el = findInElements(elements, id);
    className = makeSafeForCSS(className);

    if (!el?.classNames) return;
    if (el) {
      if (el.classNames.indexOf(className) === -1) {
        el.classNames.push(className);
      }
      if (this.state.classNames.indexOf(className) === -1) {
        this.addClassName(className);
      }
    }
    this.setState({ elements });
  }

  removeClassFromElement(id, className) {
    const elements = [...this.state.elements];

    const el = findInElements(elements, id);

    if (el) {
      const idx = el.classNames.indexOf(className);
      if (idx !== -1) {
        el.classNames.splice(idx, 1);
      }
    }
    this.setState({ elements });
  }

  addChildToElement(id, tagName) {
    const elements = [...this.state.elements];
    const el = findInElements(elements, id);
    const child = {
      tag: tagName,
      id: ID(),
      classNames: [],
      children: [],
    };

    if (!tagName) {
      //must be a textNode
      child.text = "Text";
    }

    if (el) {
      el.children.push(child);
    } else {
      //add to root
      elements.push(child);
    }
    this.setCurrentActive(child);
    this.setState({ elements });
  }

  removeElement(id) {
    const elements = [...this.state.elements];
    let found = findParentAndIndexInElements(elements, id);

    //unset currentActive if it is deleted
    if (id === this.state.currentActive?.id) {
      this.setCurrentActive(false);
    }

    if (!found) {
      let index = elements.findIndex((el) => el.id === id);
      if (index > -1) {
        elements.splice(index, 1);
      }
    } else {
      found.parent.children && found.parent.children.splice(found.index, 1);
    }
    this.setState({ elements });
  }

  changeElementText(id, txt) {
    const elements = [...this.state.elements];
    const el = findInElements(elements, id);

    el.text = txt;
    this.setState({ elements });
  }

  changeElementSrc(id, url) {
    const elements = [...this.state.elements];
    const el = findInElements(elements, id);

    el.src = url;
    this.setState({ elements });
  }

  // add pseudo like :hover, :before ...
  updatePseudoClass(classNameObj, pseudo, txt) {
    if (!classNameObj) return;
    const newClassNames = [...this.state.classNames];
    const index = newClassNames.findIndex(
      (el) => classNameObj.name === el.name
    );
    if (index > -1) {
      newClassNames[index] = { ...newClassNames[index], [pseudo]: txt };
    }
    this.setState({ classNames: [...newClassNames] });
  }

  changeElementTag(id, txt) {
    const elements = [...this.state.elements];
    const el = findInElements(elements, id);

    el.tag = txt;
    this.setState({ elements });
  }

  getClassByName(name) {
    const classObj = this.state.classNames.find((cn) => cn.name === name);
    if (!classObj) {
      return this.state.addClassName(name);
    }
    return classObj;
  }

  /* param by = number // is -1 to move up or +1 to move down */
  moveElement(id, by) {
    const elements = [...this.state.elements];
    let found = findParentAndIndexInElements(elements, id);

    let data;
    let from;

    if (!found) {
      from = elements.findIndex((el) => el.id === id);
      data = elements;
    } else {
      from = found.index;
      data = found.parent.children;
    }

    let to = from + by;

    function moveItem(from, to) {
      // remove `from` item and store it
      var f = data.splice(from, 1)[0];
      // insert stored item into position `to`
      data.splice(to, 0, f);
    }
    moveItem(from, to);
    this.setState({ elements });
  }

  moveElementFromTo(fromID, toID, position) {
    const elements = [...this.state.elements];
    let fromParentAndIndex = findParentAndIndexInElements(elements, fromID);
    let toParentAndIndex = findParentAndIndexInElements(elements, toID);
    const fromElement = findInElements(elements, fromID);
    const toElement = findInElements(elements, toID);

    let fromArray;
    let toArray;
    let from;
    let to;

    if (!fromParentAndIndex) {
      from = elements.findIndex((el) => el.id === fromID);
      fromArray = elements;
    } else {
      from = fromParentAndIndex.index;
      fromArray = fromParentAndIndex.parent.children;
    }

    if (!toParentAndIndex) {
      to = elements.findIndex((el) => el.id === toID);
      toArray = elements;
    } else {
      to = toParentAndIndex.index;
      toArray = toParentAndIndex.parent.children;
    }

    //check if element is moved inside itself
    const childrenOfFromElement = fromElement.children;
    if (childrenOfFromElement && findInElements(childrenOfFromElement, toID)) {
      console.log("cant move item inside item");
      return;
    }

    function moveItem(from, to) {
      var f = fromArray.splice(from, 1)[0];
      switch (position) {
        case MOVE_ELEMENT_POSITION.BEFORE:
          if (fromArray == toArray && from < to) {
            toArray.splice(to - 1, 0, f);
          } else {
            toArray.splice(to, 0, f);
          }
          break;
        case MOVE_ELEMENT_POSITION.AFTER:
          if (fromArray == toArray && from < to) {
            toArray.splice(to, 0, f);
          } else {
            toArray.splice(to + 1, 0, f);
          }
          break;
        case MOVE_ELEMENT_POSITION.INSIDE:
          toElement.children?.push(f);
          break;
        default:
          break;
      }
    }
    moveItem(from, to);
    this.setState({ elements });
  }

  cloneElement(id) {
    const elements = [...this.state.elements];
    const el = findInElements(elements, id);
    const found = findParentAndIndexInElements(elements, id);

    const cloned = deepClone(el);

    // Change ALL IDs
    cloned.id = ID();
    function changeNestedIDs(elements) {
      elements.forEach((el) => {
        el.id = ID();
        if (el.children) {
          changeNestedIDs(el.children);
        }
      });
    }
    if (cloned.children) {
      changeNestedIDs(cloned.children);
    }

    // Add the cloned Element right after the original Element
    if (!found) {
      let index = elements.findIndex((el) => el.id === id);
      elements.splice(index + 1, 0, cloned);
    } else {
      found.parent.children &&
        found.parent.children.splice(found.index + 1, 0, cloned);
    }
    console.log(id, cloned);
    this.setState({ elements });
  }

  importJSON(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    const that = this;
    reader.onload = (event) => {
      const json = JSON.parse(event.target.result);
      const { classNames, elements } = json;
      that.setState({ classNames, elements });
    };
    reader.onerror = (error) => {
      console.log(error);
    };
    reader.readAsText(file);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const ContextConsumer = (props) => {
  return <Context.Consumer>{props.children}</Context.Consumer>;
};
