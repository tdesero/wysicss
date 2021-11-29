import { useState, useEffect } from "react";
import { ContextConsumer } from "../../context";

export default function CssPropertySelect({
  propertyName,
  cssClass,
  options,
  label,
}) {
  const startValue = cssClass?.properties?.[propertyName]?.value || "";
  const [property, setProperty] = useState(startValue);

  useEffect(() => {
    setProperty(startValue);
  }, [cssClass, startValue]);

  return (
    <ContextConsumer>
      {({ updateClassProperty }) => (
        <>
          <select
            className="p-1 border rounded my-1 text-gray-700 text-sm"
            value={property}
            onChange={(e) => {
              setProperty(e.target.value);
              updateClassProperty(cssClass, propertyName, e.target.value);
            }}
          >
            <option disabled value="">
              {label}
            </option>
            {options.map((option) => (
              <option value={option.value} key={propertyName + option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      )}
    </ContextConsumer>
  );
}
