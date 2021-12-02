import React, { useState } from "react";
import { usePopper } from "react-popper";

const TooltipWrapper = ({ children, tooltip }) => {
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
          padding: 5,
        },
      },
    ],
  });

  const [show, setShow] = useState(false);

  const showTooltip = () => {
    setShow(true);
  };

  const hideTooltip = () => {
    setShow(false);
  };

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>

      {show && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-gray-100 rounded px-2 py-1 z-50"
        >
          {tooltip}
          <div
            ref={setArrowElement}
            style={styles.arrow}
            className="popper-arrow bg-gray-100"
          />
        </div>
      )}
    </>
  );
};

export default TooltipWrapper;
