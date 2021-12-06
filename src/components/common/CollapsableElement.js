import { useState } from "react";

export default function CollapsableElement({ isOpen = true, title, ...props }) {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="relative" {...props}>
      <button
        className="absolute -left-4 top-1 px-1"
        onClick={() => setOpen(!open)}
      >
        {open ? "-" : "+"}
      </button>
      {title}
      <div>{open ? props.children : null}</div>
    </div>
  );
}
