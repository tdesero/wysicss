import NumberControl from "../common/NumberControl";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";

export default function CssPropertyInput({
  propertyName,
  cssClass,
  label,
  direction,
  hasUnit = true,

  ...props
}) {
  const { updateClassProperty, currentBreakpoint, classNames } =
    useContext(Context);

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

  const origClass = currentBreakpoint
    ? classNames.find((c) => cssClass.name === c.name)
    : null;

  const origProp = origClass?.properties[propertyName] || undefined;

  return (
    <div className="border rounded p-2 my-1">
      <label className="text-xs block text-gray-400 relative">
        {label}{" "}
        {currentBreakpoint &&
          origProp &&
          (origProp.value || origProp.unit === "auto") && (
            <span
              className="absolute ml-1 -top-1 bg-indigo-500 text-white px-1 rounded-full"
              style={{ fontSize: ".5rem" }}
            >
              {origProp.value + origProp.unit}
            </span>
          )}
      </label>
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
                updateClassProperty(cssClass, propertyName, "", e.target.value);
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
  );
}
