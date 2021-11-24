import CollapsableElement from "./common/CollapsableElement";
import * as Icon from "react-feather";
import { useDrag, useDrop } from "react-dnd";
import ElementTreeItem from "./ElementTreeItem";

export default function ElementTreeItemSingle({
  setCurrentActive,
  currentActive,
  addChildToElement,
  removeElement,
  moveElement,
  moveElementFromTo,
  cloneElement,
  el,
}) {
  // useDrag - the list item is draggable
  const [{}, dragRef] = useDrag({
    type: "treeitem",
    item: { id: el.id },
  });

  // useDrop - the list item is also a drop area
  const [{ isOver }, dropRef] = useDrop({
    accept: "treeitem",
    hover: (item, monitor) => {
      console.log("hovering");
    },
    drop: (item) => {
      console.log(`move ${item.id} to ${el.id}`);
      moveElementFromTo(item.id, el.id);
    },
  });

  let elClassList = "";
  el.classNames &&
    el.classNames.forEach((name) => {
      elClassList += `.${name}`;
    });
  const activeClass = el.id === currentActive?.id ? "bg-gray-200" : "";
  const AlwaysVisible = (
    <div
      className="border-b py-1 flex"
      onClick={() => {
        setCurrentActive(el);
      }}
    >
      <div
        className="flex rounded overflow-hidden mr-1"
        style={{ maxWidth: 150 }}
      >
        <span className="pl-1 pr-2 bg-gray-300" ref={dragRef} draggable>
          <span className="inline">
            <Icon.Move size={8} className="inline-block mr-1" />
          </span>
          {el.tag ? el.tag : "text: "}
          {el.text && el.text}
        </span>
        <span className="px-2 bg-gray-200 text-gray-600">
          {el.classNames && elClassList}
        </span>
      </div>
      <button className="mx-1" onClick={() => moveElement(el.id, -1)}>
        <Icon.ArrowUp size={12} />
      </button>
      <button className="mx-1" onClick={() => moveElement(el.id, 1)}>
        <Icon.ArrowDown size={12} />
      </button>
      <button className="mx-1" onClick={() => cloneElement(el.id)}>
        <Icon.Copy size={12} />
      </button>
      <button
        className="mx-1"
        onClick={(e) => {
          e.stopPropagation();
          removeElement(el.id);
        }}
      >
        <Icon.Trash size={12} />
      </button>
      {el.tag && (
        <>
          <button
            className="px-2 rounded bg-gray-300 mr-1"
            onClick={() => {
              addChildToElement(el.id, "div");
            }}
          >
            + div
          </button>
          <button
            className="px-2 rounded bg-gray-300 mr-1"
            onClick={() => {
              addChildToElement(el.id, "img");
            }}
          >
            + img
          </button>
          <button
            className="px-2 rounded bg-gray-300 mr-1"
            onClick={() => {
              addChildToElement(el.id, false);
            }}
          >
            + Text
          </button>
        </>
      )}
    </div>
  );

  return (
    <li key={el.id} className={"text-xs " + activeClass}>
      <div
        style={{ height: 10, backgroundColor: isOver ? "green" : "" }}
        ref={dropRef}
      />
      <CollapsableElement title={AlwaysVisible}>
        {el.children && (
          <ElementTreeItem
            {...{
              childrenArray: el.children,
              setCurrentActive,
              currentActive,
              addChildToElement,
              removeElement,
              moveElement,
              moveElementFromTo,
              cloneElement,
            }}
          />
        )}
      </CollapsableElement>
    </li>
  );
}
