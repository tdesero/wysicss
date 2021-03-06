import { ContextConsumer } from "./../context";
import ElementTreeItem from "./ElementTreeItem";

export default function ElementTreeContainer() {
  return (
    <ContextConsumer>
      {({
        elements,
        setCurrentActive,
        currentActive,
        addChildToElement,
        removeElement,
        classNames,
        moveElement,
        moveElementFromTo,
        cloneElement,
      }) => (
        <div>
          <div className="overflow-auto pb-5">
            <ElementTreeItem
              {...{
                childrenArray: elements,
                setCurrentActive,
                currentActive,
                addChildToElement,
                removeElement,
                classNames,
                moveElement,
                moveElementFromTo,
                cloneElement,
              }}
            />
          </div>
          <button
            onClick={() => addChildToElement(null, "div")}
            className="mt-3 w-full py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow"
          >
            +
          </button>
        </div>
      )}
    </ContextConsumer>
  );
}
