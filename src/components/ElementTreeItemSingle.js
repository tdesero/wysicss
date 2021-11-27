import CollapsableElement from "./common/CollapsableElement";
import * as Icon from "react-feather";
import { useDrag, useDrop } from "react-dnd";
import ElementTreeItem from "./ElementTreeItem";
import { MOVE_ELEMENT_POSITION } from "../constants";

export default function ElementTreeItemSingle({
  //TODO: get it directly from context...
  setCurrentActive,
  currentActive,
  addChildToElement,
  removeElement,
  moveElement,
  moveElementFromTo,
  cloneElement,

  //props for this el
  el,
}) {
  const [{}, dragRef] = useDrag({
    type: "treeitem",
    item: { id: el.id },
  });

  const [{ isOverBefore }, dropRefBefore] = useDrop({
    accept: "treeitem",
    drop: (item) => {
      console.log(`move ${item.id} to ${el.id}, before`);
      moveElementFromTo(item.id, el.id, MOVE_ELEMENT_POSITION.BEFORE);
    },
    collect: (monitor) => {
      return {
        isOverBefore: monitor.isOver(),
      };
    },
  });

  const [{ isOverAfter }, dropRefAfter] = useDrop({
    accept: "treeitem",
    drop: (item) => {
      console.log(`move ${item.id} to ${el.id}, after`);
      moveElementFromTo(item.id, el.id, MOVE_ELEMENT_POSITION.AFTER);
    },
    collect: (monitor) => {
      return {
        isOverAfter: monitor.isOver(),
      };
    },
  });

  const [{ isOverInside }, dropRefInside] = useDrop({
    accept: "treeitem",
    drop: (item) => {
      console.log(`move ${item.id} to ${el.id}, inside`);
      moveElementFromTo(item.id, el.id, MOVE_ELEMENT_POSITION.INSIDE);
    },
    collect: (monitor) => {
      return {
        isOverInside: monitor.isOver(),
      };
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
      className="py-1 flex"
      onClick={() => {
        setCurrentActive(el);
      }}
    >
      <div
        className="flex rounded overflow-hidden flex-shrink-0 mr-1"
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
        className={isOverBefore && "bg-indigo-500"}
        style={{ height: 4 }}
        ref={dropRefBefore}
      />
      <CollapsableElement title={AlwaysVisible}>
        {el.children && (
          <>
            <div
              className={isOverInside && "bg-indigo-500"}
              style={{
                height: 2,
                width: "100%",
                position: "absolute",
                left: "1rem",
              }}
              ref={dropRefInside}
            />
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
          </>
        )}
      </CollapsableElement>
      <div
        className={isOverAfter && "bg-indigo-500"}
        style={{ height: 4 }}
        ref={dropRefAfter}
      />
    </li>
  );
}
