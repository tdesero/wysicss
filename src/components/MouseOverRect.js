import { useEffect, useState } from "react";

const MouseOverRect = ({ children, scrollPos }) => {
  const [rect, setRect] = useState({});
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [scrollPos]);

  return (
    <div
      onMouseMove={(e) => {
        const box = e.target.getBoundingClientRect();
        setRect(box);
        setShow(true);
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
            width: rect.width,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default MouseOverRect;
