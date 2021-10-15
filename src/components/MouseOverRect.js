import { useState } from "react";

const MouseOverRect = ({ children }) => {
  const [rect, setRect] = useState({});
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseMove={(e) => {
        const box = e.target.getBoundingClientRect();
        setRect(box);
      }}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {show && (
        <div
          style={{
            position: "fixed",
            border: "1px solid rgba(99, 102, 241, 1.0)",
            pointerEvents: "none",
            left: rect.left,
            top: rect.top,
            height: rect.height,
            width: rect.width
          }}
        />
      )}
      {children}
    </div>
  );
};

export default MouseOverRect;
