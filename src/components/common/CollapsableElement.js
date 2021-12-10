import { useState } from "react";
import * as Icon from "react-feather";

export default function CollapsableElement({
  isOpen = true,
  title,
  children,
  ...props
}) {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="relative" {...props}>
      <button
        className="absolute -left-4 top-1.5 px-1 text-gray-600"
        onClick={() => setOpen(!open)}
      >
        {children &&
          (open ? <Icon.Minus size={10} /> : <Icon.Plus size={10} />)}
      </button>
      {title}
      <div>{open ? children : null}</div>
    </div>
  );
}
