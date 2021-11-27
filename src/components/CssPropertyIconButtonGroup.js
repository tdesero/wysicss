import { useState, useEffect } from "react";
import { ContextConsumer } from "../context";
import BadgeButton from "./common/BadgeButton";

export default function CssPropertyIconButtonGroup({
  propertyName,
  cssClass,
  options,
  label,
}) {
  const startValue = cssClass?.properties?.[propertyName]?.value || 0;
  const [property, setProperty] = useState(startValue);

  useEffect(() => {
    setProperty(startValue);
  }, [cssClass, startValue]);

  return (
    <ContextConsumer>
      {({ updateClassProperty }) => (
        <>
          {label && <p className="text-xs text-gray-400 mb-1">{label}</p>}
          <div className="flex gap-2">
            {options.map((option) => (
              <button
                className={
                  "p-1 border rounded my-1 " +
                  (option.value === property
                    ? "bg-indigo-500 text-white"
                    : "text-gray-700")
                }
                onClick={() => {
                  const newValue =
                    option.value === property ? "" : option.value;
                  setProperty(newValue);
                  updateClassProperty(cssClass, propertyName, newValue);
                }}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </>
      )}
    </ContextConsumer>
  );
}
