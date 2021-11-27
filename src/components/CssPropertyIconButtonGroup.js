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
        <div className="flex-1">
          {label && <p className="text-xs text-gray-400 mb-1">{label}</p>}
          <div>
            {options.map((option) => (
              <button
                className={
                  "p-1 border rounded mr-1 " +
                  (option.value === property
                    ? "bg-indigo-500 text-white"
                    : "text-gray-700")
                }
                onClick={() => {
                  setProperty(option.value);
                  updateClassProperty(cssClass, propertyName, option.value);
                }}
              >
                {option.icon}
              </button>
            ))}
          </div>
        </div>
      )}
    </ContextConsumer>
  );
}
