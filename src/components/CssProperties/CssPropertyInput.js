import NumberControl from "../common/NumberControl";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import { BREAKPOINT_NAMES } from "../../constants";

export default function CssPropertyInput({
  propertyName,
  cssClass,
  label,
  direction,
  hasUnit = true,

  ...props
}) {
  const { updateClassProperty, breakpoints, currentBreakpoint, classNames } =
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
    : undefined;

  const origProp = origClass?.properties?.[propertyName] || undefined;

  const tabletProp =
    currentBreakpoint === BREAKPOINT_NAMES.MOBILE
      ? origClass?.breakpoints?.[BREAKPOINT_NAMES.TABLET]?.properties?.[
          propertyName
        ]
      : undefined;

  return (
    <div className="border rounded p-2 my-1">
      <label className="text-xs block text-gray-400 relative">
        {label}{" "}
        {currentBreakpoint &&
          tabletProp &&
          (tabletProp.value || tabletProp.unit === "auto") && (
            <span
              className="ml-1 -top-1 bg-green-500 text-white px-1 rounded-full"
              style={{ fontSize: ".5rem" }}
            >
              {tabletProp.value + tabletProp.unit}
            </span>
          )}
        {currentBreakpoint &&
          origProp &&
          (origProp.value || origProp.unit === "auto") && (
            <span
              className="ml-1 -top-1 bg-indigo-500 text-white px-1 rounded-full"
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
