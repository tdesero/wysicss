import { useState, useEffect } from "react";
import { ContextConsumer } from "../../context";

export default function CssPropertyInput({ propertyName, cssClass, label }) {
  const startValue = cssClass?.properties?.[propertyName]?.value || "";
  const [property, setProperty] = useState(startValue);

  useEffect(() => {
    setProperty(startValue);
  }, [cssClass, startValue]);

  return (
    <ContextConsumer>
      {({ updateClassProperty }) => (
        <div className="border rounded p-2 my-1 w-full">
          <label className="text-xs block text-gray-400">
            {label}
            <button
              className="ml-2"
              onClick={() => {
                setProperty("");
                updateClassProperty(cssClass, propertyName, "");
              }}
            >
              &times;
            </button>
          </label>
          <input
            className="w-5 h-5 rounded-full border-0"
            type="color"
            value={property}
            onChange={(e) => {
              const val = e.target.value;
              setProperty(val);
              updateClassProperty(cssClass, propertyName, val);
            }}
          />
        </div>
      )}
    </ContextConsumer>
  );
}
