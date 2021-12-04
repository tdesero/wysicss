import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";
import Editor from "react-simple-code-editor";
import CssProperties from "./CssProperties/CssProperties";
import BadgeButton from "./common/BadgeButton";
import AddClassInput from "./AddClassInput";
import { Accordion } from "./common/Accordion";

export default function CssEditor({
  elementSelected,
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
}) {
  const highlight = (txt) => {
    return hljs.highlight(txt, { language: "css" }).value;
  };

  return (
    <>
      <div className="p-4 border-b sticky top-0 bg-white z-10">
        <p className="text-xs font-bold uppercase tracking-wider mb-3">
          Classes
        </p>
        {elementSelected?.classNames &&
          elementSelected.classNames.map((n) => (
            <BadgeButton
              key={n}
              size="lg"
              isActive={n === cssClass?.name ? true : false}
              onClick={() => {
                // find class
                const c = getClassByName(n);
                if (c) {
                  selectClass(c);
                } else {
                  addClassName(n);
                }
              }}
              onDelete={() => removeClassFromElement(elementSelected.id, n)}
            >
              .{n}
            </BadgeButton>
          ))}
        {elementSelected && (
          <AddClassInput
            classNameRecieverEl={elementSelected}
            selectClass={selectClass}
          />
        )}
      </div>
      {cssClass && elementSelected?.classNames?.length > 0 && (
        <>
          <CssProperties
            cssClass={cssClass}
            elementSelected={elementSelected}
          />
          <Accordion title="Additional CSS" isOpen={false}>
            {cssClass && (
              <div className="text-sm mb-2">
                <span
                  className={`rounded inline-block ${
                    pseudo === "" ? "bg-gray-400" : "bg-gray-200"
                  } px-2 mr-1 mb-1`}
                  onClick={() => {
                    const c = classNames.find(
                      (cn) => cn.name === cssClass.name
                    );
                    selectClass(c);
                    setPseudo("");
                  }}
                >
                  class
                </span>
                <span
                  className={`rounded inline-block ${
                    pseudo === ":hover" ? "bg-gray-400" : "bg-gray-200"
                  } px-2 bg-secondary mr-1 mb-1`}
                  onClick={() => {
                    const c = classNames.find(
                      (cn) => cn.name === cssClass.name
                    );
                    selectPseudo(c, ":hover");
                  }}
                >
                  :hover
                </span>
                <span
                  className={`rounded inline-block ${
                    pseudo === ":before" ? "bg-gray-400" : "bg-gray-200"
                  } px-2 bg-secondary mr-1 mb-1`}
                  onClick={() => {
                    const c = classNames.find(
                      (cn) => cn.name === cssClass.name
                    );
                    selectPseudo(c, ":before");
                  }}
                >
                  :before
                </span>
                <span
                  className={`rounded inline-block ${
                    pseudo === ":after" ? "bg-gray-400" : "bg-gray-200"
                  } px-2 bg-secondary mr-1 mb-1`}
                  onClick={() => {
                    const c = classNames.find(
                      (cn) => cn.name === cssClass.name
                    );
                    selectPseudo(c, ":after");
                  }}
                >
                  :after
                </span>
              </div>
            )}
            <pre className="text-xs mb-3">
              <code>
                .{cssClass && cssClass.name + pseudo} &#123; ... &#125;
              </code>
            </pre>
            <Editor
              className="hljs language-css rounded mt-2 mb-4"
              value={val}
              onValueChange={(code) => {
                //console.log(code);
                setVal(code);

                if (pseudo !== "") {
                  updatePseudoClass(cssClass, pseudo, code);
                } else {
                  updateClassText(cssClass, code);
                }
              }}
              onBlur={() => {
                updateClassText(cssClass, val);

                if (pseudo !== "") {
                  updatePseudoClass(cssClass, pseudo, val);
                } else {
                  updateClassText(cssClass, val);
                }
              }}
              highlight={(code) => highlight(code)}
              padding={16}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </Accordion>
        </>
      )}
    </>
  );
}
