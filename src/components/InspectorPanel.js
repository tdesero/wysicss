import { useEffect, useState, useContext, createContext } from "react";
import { Context } from "./../context";
import { Accordion } from "./common/Accordion";
import BadgeButton from "./common/BadgeButton";

import exportHTML from "./../helpers/exportHTML";
import saveJSON from "./../helpers/saveJSON";

import ElementInfos from "./ElementInfos";
import CssEditor from "./CssEditor";

import { Tab } from "@headlessui/react";

export const SelectClassContext = createContext();

export default function InspectorPanel() {
  const [val, setVal] = useState("/*write some code*/");
  const [cssClass, setCssClass] = useState();
  const [newClassName, setNewClassName] = useState("new-class");
  const [text, setText] = useState("");
  const [pseudo, setPseudo] = useState("");

  const {
    classNames,
    elements,
    removeClassName,
    updateClassText,
    addClassName,
    addClassToElement,
    removeClassFromElement,
    changeElementText,
    updatePseudoClass,
    changeElementTag,
    currentActive,
    getClassByName,
    importJSON,
    changeElementSrc,
    currentBreakpoint,
    breakpoints,
  } = useContext(Context);

  useEffect(() => {
    if (currentActive?.classNames?.length > 0) {
      //use the first className in el
      const newClassObj = getClassByName(currentActive.classNames[0]);
      if (newClassObj) {
        selectClass(newClassObj);
      }
    }
  }, [currentActive, getClassByName]);

  // make sure the current class is always up to date
  useEffect(() => {
    if (cssClass) {
      const newClassObj = getClassByName(cssClass.name);
      if (newClassObj) {
        selectClass(newClassObj);
      }
    }
  }, [classNames, currentBreakpoint]);

  const selectPseudo = (classObj, pseudo) => {
    setCssClass(classObj);
    setPseudo(pseudo);
    if (classObj) {
      setVal(classObj[pseudo] ? classObj[pseudo] : "");
    }
  };

  const selectClass = (obj) => {
    setVal(obj.txt);
    setCssClass(obj);
  };

  return (
    <SelectClassContext.Provider value={selectClass}>
      <div className="w-96 flex-shrink-0 border-l shadow-xl overflow-auto bg-white">
        <Tab.Group>
          <Tab.List className="border-b flex text-xs tracking-wider">
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-4 border-b-2 border-indigo-500 flex-1 font-bold uppercase"
                  : "p-4 flex-1 font-bold uppercase"
              }
            >
              Style
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-4 border-b-2 border-indigo-500 flex-1 font-bold uppercase"
                  : "p-4 flex-1 font-bold uppercase"
              }
            >
              Element
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "p-4 border-b-2 border-indigo-500 flex-1 font-bold uppercase"
                  : "p-4 flex-1 font-bold uppercase"
              }
            >
              Document
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              {
                //we don't need this, if it's a textnode
                (currentActive && currentActive.tag) || cssClass ? (
                  <CssEditor
                    {...{
                      elementSelected: currentActive,
                      addClassName,
                      cssClass,
                      classNames,
                      selectClass,
                      setPseudo,
                      pseudo,
                      selectPseudo,
                      val,
                      setVal,
                      updatePseudoClass,
                      updateClassText,
                      removeClassFromElement,
                      getClassByName,
                    }}
                  />
                ) : (
                  <div class="p-4 text-sm">
                    Click on an Element to style it.
                  </div>
                )
              }
            </Tab.Panel>
            <Tab.Panel>
              <Accordion title="Element Details" isOpen={true}>
                <ElementInfos
                  {...{
                    elementSelected: currentActive,
                    text,
                    setText,
                    changeElementText,
                    selectClass,
                    classNames,
                    addClassName,
                    removeClassFromElement,
                    newClassName,
                    setNewClassName,
                    addClassToElement,
                    changeElementTag,
                    changeElementSrc,
                  }}
                />
              </Accordion>
            </Tab.Panel>
            <Tab.Panel>
              <Accordion title="All CSS Classes" isOpen={false}>
                {classNames.map((n) => (
                  <BadgeButton
                    key={n.name}
                    isActive={n.name === cssClass?.name ? true : false}
                    onClick={() => selectClass(n)}
                    onDelete={() => removeClassName(n)}
                  >
                    <button
                      className="mr-2"
                      onClick={() =>
                        addClassToElement(currentActive.id, n.name)
                      }
                    >
                      +
                    </button>
                    {n.name}
                  </BadgeButton>
                ))}
              </Accordion>
              <Accordion title="Export" isOpen={true}>
                <button
                  className="mt-3 w-full py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow"
                  onClick={() =>
                    exportHTML({ classNames, elements, breakpoints })
                  }
                >
                  Export HTML
                </button>
                <button
                  className="mt-3 w-full py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow"
                  onClick={() => saveJSON({ classNames, elements })}
                >
                  Save JSON
                </button>
              </Accordion>
              <Accordion title="Import" isOpen={true}>
                <label className="mt-3 block text-center py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow">
                  import JSON
                  <input
                    className="hidden"
                    type="file"
                    onChange={importJSON}
                    accept="application/json"
                  />
                </label>
              </Accordion>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </SelectClassContext.Provider>
  );
}
