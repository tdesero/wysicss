import { useState } from "react";

export default function CollapsableElement({ isOpen = true, ...props }) {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="relative" {...props}>
      <button className="absolute -left-3 top-1" onClick={() => setOpen(!open)}>
        {open ? "-" : "+"}
      </button>
      {props.title}
      <div>{open ? props.children : null}</div>
    </div>
  );
}
