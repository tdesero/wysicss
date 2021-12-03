import { useState } from "react";
import { SketchPicker } from "react-color";
import { usePopper } from "react-popper";

export const ColorPicker = ({ color, onChange }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
      {
        name: "preventOverflow",
        options: {
          padding: 40,
        },
      },
    ],
  });

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={setReferenceElement}
        className="rounded-full w-4 h-4"
        style={{ backgroundColor: color }}
        onClick={toggle}
      />
      {open && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <SketchPicker color={color} onChange={onChange} />
          <div
            ref={setArrowElement}
            style={styles.arrow}
            className="popper-arrow bg-gray-100"
          />
        </div>
      )}
    </div>
  );
};
