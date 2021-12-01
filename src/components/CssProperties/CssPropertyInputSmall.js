import NumberControl from "../common/NumberControl";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";

/** TODO: This is basically the same as CssPropertyInput -> I should try to import this into the other component... */
export default function CssPropertyInputSmall({
  propertyName,
  cssClass,
  direction,
  hasUnit = true,
  isLinked = false,
  linkedCSSProps,

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

  const { updateClassProperty } = useContext(Context);

  function updateRelevantClassProperties(cssClass, propertyName, val, unit) {
    if (isLinked) {
      linkedCSSProps.forEach((propertyName) => {
        updateClassProperty(cssClass, propertyName, val, unit);
        console.log(propertyName, val, unit);
      });
    } else {
      updateClassProperty(cssClass, propertyName, val, unit);
    }
  }

  return (
    <div className="flex">
      <NumberControl
        direction={direction}
        value={property}
        onChange={(val) => {
          setProperty(val);
          updateRelevantClassProperties(cssClass, propertyName, val, unit);
        }}
        placeholder="-"
        {...props}
      />
      {hasUnit && (
        <select
          className={
            "text-xs text-gray-400 appearance-none bg-transparent " +
            (unit === "auto" ? "w-auto" : "w-4")
          }
          value={unit}
          onChange={(e) => {
            setUnit(e.target.value);
            /*if (e.target.value === "auto") {
              setProperty("");
              updateRelevantClassProperties(
                cssClass,
                propertyName,
                "",
                e.target.value
              );
            } else {*/
            updateRelevantClassProperties(
              cssClass,
              propertyName,
              property,
              e.target.value
            );
            /*}*/
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
  );
}
