import { useState } from "react";
export const Accordion = ({ title, children, isOpen = true }) => {
  const [open, setOpen] = useState(isOpen);
  const openClass = open ? "block" : "hidden";
  const chevronTransformClass = open ? "rotate-180" : "";

  return (
    <div className="border-b">
      <h2 className="block">
        <button
          className="block w-full text-left relative text-xs font-bold uppercase tracking-wider p-4"
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {title}
          <span
            className={`absolute right-4 top-4 transition transform ${chevronTransformClass}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div className={"px-4 pb-4 " + openClass}>
        <div>{children}</div>
      </div>
    </div>
  );
};
