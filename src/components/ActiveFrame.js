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
    selectParent,
  } = useContext(Context);

  const cloneCurrentElement = () => cloneElement(currentActive.id);
  const moveUp = () => moveElement(currentActive.id, -1);
  const moveDown = () => moveElement(currentActive.id, +1);
  const addChild = () => addChildToElement(currentActive.id, "div");
  const addText = () => addChildToElement(currentActive.id, false);
  const addImg = () => addChildToElement(currentActive.id, "img");
  const deleteElement = () => removeElement(currentActive.id);
  const selectParentEl = () => selectParent(currentActive.id);

  return (
    <>
      {currentActive && currentActive.id && currentActive.tag && (
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
              margin: "-2px", //negative border
              transform:
                currentBox.y > 20 ? "translateY(-100%)" : "translateY(100%)",
            }}
            className={
              "absolute inline-flex " +
              (currentBox.x > 300 ? "right-0 " : "left-0 ") +
              (currentBox.y > 20 ? "top-0" : "bottom-0") +
              " gap-1 text-xs text-white bg-indigo-500"
            }
          >
            <div className="p-1 bg-indigo-600 flex items-center">
              <button onClick={selectParentEl}>
                <Icon.ArrowUpLeft size={12} />
              </button>
            </div>
            <div className="flex p-1">
              <span
                className="mr-2 w-12 overflow-hidden whitespace-nowrap overflow-ellipsis"
                title={
                  currentActive.tag + "." + currentActive.classNames?.join(".")
                }
              >
                {currentActive.tag}.{currentActive.classNames?.join(".")}
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
            {currentActive.tag && currentActive.tag !== "img" && (
              <div className="bg-indigo-800 flex p-1">
                <button
                  style={{ pointerEvents: "auto" }}
                  onClick={addChild}
                  className="flex items-center"
                >
                  <Icon.Plus size={12} />
                  <Icon.Square size={12} />
                </button>
                <button
                  style={{ pointerEvents: "auto" }}
                  onClick={addText}
                  className="flex items-center"
                >
                  <Icon.Plus size={12} />
                  <Icon.Type size={12} />
                </button>
                <button
                  style={{ pointerEvents: "auto" }}
                  onClick={addImg}
                  className="flex items-center"
                >
                  <Icon.Plus size={12} />
                  <Icon.Image size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
