import NumberControl from "../common/NumberControl";
import { useState, useEffect } from "react";
import { ContextConsumer } from "../../context";

export default function CssPropertyInput({
  propertyName,
  cssClass,
  label,
  direction,
  hasUnit = true,

  ...props
}) {
  const startValue = cssClass?.properties?.[propertyName]?.value || "";
  const [property, setProperty] = useState(startValue);
  let startUnit;
  if (hasUnit) {
    startUnit = cssClass?.properties?.[propertyName]?.unit || "px";
  } else {
    startUnit = "";
  }

  const [unit, setUnit] = useState(startUnit);

  useEffect(() => {
    setProperty(startValue);
    setUnit(startUnit);
  }, [cssClass, propertyName, startUnit, startValue]);

  return (
    <ContextConsumer>
      {({ updateClassProperty }) => (
        <div className="border rounded p-2 my-1">
          <label className="text-xs block text-gray-400">{label}</label>
          <div className="flex">
            <NumberControl
              direction={direction}
              value={property}
              onChange={(val) => {
                setProperty(val);
                updateClassProperty(cssClass, propertyName, val, unit);
              }}
              {...props}
            />
            {hasUnit && (
              <select
                className="text-xs text-gray-400 appearance-none w-4"
                value={unit}
                onChange={(e) => {
                  setUnit(e.target.value);
                  if (e.target.value === "auto") {
                    setProperty("");
                    updateClassProperty(
                      cssClass,
                      propertyName,
                      "",
                      e.target.value
                    );
                  } else {
                    updateClassProperty(
                      cssClass,
                      propertyName,
                      property,
                      e.target.value
                    );
                  }
                }}
              >
                {["px", "%", "em", "rem", "vh", "vw", "auto"].map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      )}
    </ContextConsumer>
  );
}
