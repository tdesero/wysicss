import { useState, useRef, useEffect } from "react";

export default function NumberControl(props) {
  const [startValue, setStartValue] = useState(props.value);
  const ref = useRef();
  const { direction } = props;
  let startPos = null;
  const isXDirection = direction === "x";

  const updateMouse = (e) => {
    const clientPos = isXDirection ? e.clientX : e.clientY;
    let newValue;
    if (isXDirection) {
      newValue = -startPos + clientPos + Number(startValue);
    } else {
      newValue = startPos - clientPos + Number(startValue);
    }

    props.onChange(newValue);
  };
  const mouseUpHandler = (e) => {
    setStartValue(ref.current.value);
    document.removeEventListener("mousemove", updateMouse);
    document.removeEventListener("mouseup", mouseUpHandler);
  };
  const startChange = (e) => {
    const clientPos = direction === "x" ? e.clientX : e.clientY;
    startPos = clientPos;
    setStartValue(e.target.value);
    document.addEventListener("mousemove", updateMouse);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  // don' know why this was here??
  //useEffect(() => {}, [startPos]);

  useEffect(() => {
    setStartValue(props.value);
  }, [setStartValue, props.value]);

  return (
    <input
      className="w-full"
      ref={ref}
      type="number"
      value={props.value}
      onMouseDown={startChange}
      onChange={(e) => {
        setStartValue(e.target.value);
        props.onChange(e.target.value);
      }}
      style={{
        cursor: direction === "x" ? "ew-resize" : "ns-resize"
      }}
    />
  );
}
