import { Context } from "./../context";
import { useContext } from "react";
import * as Icon from "react-feather";

export default function ActiveFrame({ currentBox, scrollPos }) {
  const {
    currentActive,
    removeElement,
    moveElement,
    cloneElement,
    addChildToElement,
  } = useContext(Context);

  const cloneCurrentElement = () => cloneElement(currentActive.id);
  const moveUp = () => moveElement(currentActive.id, -1);
  const moveDown = () => moveElement(currentActive.id, +1);
  const addChild = () => addChildToElement(currentActive.id, "div");
  const addText = () => addChildToElement(currentActive.id, false);
  const deleteElement = () => removeElement(currentActive.id);

  return (
    <>
      {currentActive && currentActive.id && (
        <div
          className="border-2 border-indigo-500"
          style={{
            marginTop: scrollPos * -1,
            position: "absolute",
            width: currentBox.width,
            height: currentBox.height,
            left: currentBox.x,
            top: currentBox.y,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              pointerEvents: "auto",
              transform: currentBox.y > 20 ? "translateY(-100%)" : "none",
            }}
            className="absolute left-0 top-0 inline-flex p-1 text-xs text-white bg-indigo-500"
          >
            <span
              className="mr-2 w-14 overflow-hidden whitespace-nowrap overflow-ellipsis"
              title={
                currentActive.tag + "." + currentActive.classNames.join(".")
              }
            >
              {currentActive.tag}.{currentActive.classNames.join(".")}
            </span>
            <button onClick={cloneCurrentElement}>
              <Icon.Copy size={12} />
            </button>
            <button onClick={moveUp}>
              <Icon.ArrowUp size={12} />
            </button>
            <button onClick={moveDown}>
              <Icon.ArrowDown size={12} />
            </button>
            <button onClick={deleteElement}>
              <Icon.Trash size={12} />
            </button>
          </div>
          {currentBox.width > 180 && currentBox.height > 50 && (
            <div className="absolute top-0 left-0 w-full flex justify-end p-2">
              <button
                style={{ pointerEvents: "auto" }}
                onClick={addChild}
                className="bg-indigo-500 text-white text-xs py-1 px-3 rounded-l border-r border-indigo-600"
              >
                + DIV
              </button>
              <button
                style={{ pointerEvents: "auto" }}
                onClick={addText}
                className="bg-indigo-500 text-white text-xs py-1 px-3 rounded-r"
              >
                + Text
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
