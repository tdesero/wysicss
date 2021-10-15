import { useState, useRef, useEffect } from "react";

export default function BadgeAddInput({ onAdd, size = "md" }) {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef();

  const activate = () => {
    setActive(true);
  };

  const deactivate = () => {
    setActive(false);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text !== "") {
      onAdd(text);
    }
    setText("");
    inputRef.current.blur();
    deactivate();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  useEffect(() => {
    if (active) inputRef.current.focus();
  }, [active]);

  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "",
    lg: "text-lg"
  };

  const sizeClass = sizes[size];

  return (
    <div
      className={`inline-block rounded mr-1 mb-1 bg-indigo-500 text-white ${sizeClass}`}
    >
      {!active ? (
        <button className="px-2" onClick={activate}>
          +
        </button>
      ) : (
        <input
          className="bg-transparent w-auto px-2"
          ref={inputRef}
          value={text}
          onChange={updateText}
          onKeyDown={handleKeyDown}
          onBlur={handleAdd}
        />
      )}
    </div>
  );
}
