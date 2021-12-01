import { useState, useRef, useEffect } from "react";

//TODO: add support for min and max values when dragging
export default function NumberControl(props) {
  const [startValue, setStartValue] = useState(props.value);
  const ref = useRef();
  const { direction } = props;
  let startPos = null;
  const isXDirection = ["e", "w", "x"].indexOf(direction) > -1;

  const updateMouse = (e) => {
    const clientPos = isXDirection ? e.clientX : e.clientY;
    const plusOrMinus = direction === "s" || direction === "w" ? -1 : +1;
    let newValue;
    if (isXDirection) {
      newValue = (-startPos + clientPos) * plusOrMinus + Number(startValue);
    } else {
      newValue = (startPos - clientPos) * plusOrMinus + Number(startValue);
    }

    props.onChange(newValue);
  };
  const mouseUpHandler = (e) => {
    setStartValue(ref.current.value);
    document.removeEventListener("mousemove", updateMouse);
    document.removeEventListener("mouseup", mouseUpHandler);
  };
  const startChange = (e) => {
    const clientPos = isXDirection ? e.clientX : e.clientY;
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

  const cursorMap = {
    n: "n-resize",
    e: "e-resize",
    s: "s-resize",
    w: "w-resize",
    x: "ew-resize",
    y: "ns-resize",
  };

  return (
    <input
      {...props}
      className={
        "bg-transparent w-full " + (props.className ? props.className : "")
      }
      ref={ref}
      type="number"
      value={props.value}
      onMouseDown={startChange}
      onChange={(e) => {
        setStartValue(e.target.value);
        props.onChange(e.target.value);
      }}
      style={{
        cursor: cursorMap[direction],
      }}
    />
  );
}
