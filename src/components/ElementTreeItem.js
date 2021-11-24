import ElementTreeItemSingle from "./ElementTreeItemSingle";

export default function ElementTreeItem(props) {
  return (
    <ul className="ml-3 w-full whitespace-nowrap">
      {props.childrenArray.map((el) => (
        <ElementTreeItemSingle {...props} el={el} />
      ))}
    </ul>
  );
}
