import ElementTreeItemSingle from "./ElementTreeItemSingle";

export default function ElementTreeItem(props) {
  return (
    <ul className="w-full whitespace-nowrap">
      {props.childrenArray.map((el) => (
        <ElementTreeItemSingle {...props} el={el} key={el.id} />
      ))}
    </ul>
  );
}
