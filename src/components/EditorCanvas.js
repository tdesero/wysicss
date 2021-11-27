import { Context } from "./../context";
import { Fragment, useContext, useEffect, useLayoutEffect } from "react";
import MouseOverRect from "./MouseOverRect";
import ContentEditable from "react-contenteditable";
import ActiveFrame from "./ActiveFrame";

import React, { useState } from "react";
import { EditorIFrame } from "./EditorIFrame";

export default function EditorCanvas(props) {
  const {
    classNames,
    elements,
    currentActive,
    setCurrentActive,
    changeElementText,
  } = useContext(Context);

  const [ref, setRef] = useState();
  const [currentBox, setCurrentBox] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  // for
  const [scrollPos, setScrollPos] = useState(0);

  useLayoutEffect(() => {
    if (ref) {
      const box = ref.getBoundingClientRect();
      box.y += scrollPos;
      setCurrentBox(box);
    }
  }, [ref, classNames, props.responsiveWidth, props.hidePanels, elements]);

  let classNamesCss = "";
  classNames.forEach((c) => {
    let properties = "";
    if (c.properties) {
      for (let [key, obj] of Object.entries(c.properties)) {
        properties += `${key}: ${obj.value}${obj.unit};\n`;
      }
    }
    classNamesCss +=
      `.${c.name} { \n${c.txt} \n${properties} } \n` +
      `.${c.name}:hover { ${c[":hover"]} } \n` +
      `.${c.name}::before { ${c[":before"]} } \n` +
      `.${c.name}::after { ${c[":after"]} } \n`;
  });

  const childElements = (childrenArray) =>
    childrenArray.map((el) => {
      const TagName = el.tag ? el.tag : Fragment;

      let elClassList = "";
      el.classNames &&
        el.classNames.forEach((name) => {
          elClassList += `${name} `;
        });

      return (
        <Fragment key={el.id}>
          {TagName !== Fragment ? (
            <>
              {TagName !== "img" ? (
                <TagName
                  ref={(newRef) => {
                    if (el.id === currentActive?.id) {
                      setRef(newRef);
                    }
                  }}
                  className={el.classNames && elClassList}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentActive(el);
                  }}
                >
                  {el.children && childElements(el.children)}
                </TagName>
              ) : (
                <TagName
                  className={el.classNames && elClassList}
                  ref={(newRef) => {
                    if (el.id === currentActive?.id) {
                      setRef(newRef);
                    }
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentActive(el);
                  }}
                  src={el.src}
                />
              )}
            </>
          ) : (
            <TagName>
              {el.text && (
                <ContentEditable
                  html={el.text}
                  onChange={(e) => {
                    changeElementText(el.id, e.target.value);
                  }}
                  tagName="span"
                ></ContentEditable>
              )}
            </TagName>
          )}
        </Fragment>
      );
    });

  return (
    <div
      className={
        "w-full relative overflow-hidden " +
        (props.responsiveWidth === "100%" ? "border" : "m-8")
      }
    >
      <EditorIFrame
        onScroll={setScrollPos}
        className="bg-white shadow-lg max-w-full h-full m-auto"
        style={{ width: props.responsiveWidth }}
      >
        <link rel="stylesheet" href="./reset.css" />
        {props.hidePanels ? (
          childElements(elements)
        ) : (
          <MouseOverRect>{childElements(elements)}</MouseOverRect>
        )}
        <style>{classNamesCss}</style>
      </EditorIFrame>
      {
        /* current bounding box */
        !props.hidePanels && (
          <div className="absolute w-full h-full top-0 pointer-events-none">
            <div
              className="relative m-auto pointer-events-none"
              style={{ width: props.responsiveWidth }}
            >
              <ActiveFrame
                currentActive={currentActive}
                currentBox={currentBox}
                scrollPos={scrollPos}
              />
            </div>
          </div>
        )
      }
    </div>
  );
}
