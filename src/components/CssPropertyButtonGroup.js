import { useState, useEffect } from "react";
import { ContextConsumer } from "../context";
import BadgeButton from "./common/BadgeButton";

export default function CssPropertyButtonGroup({
  propertyName,
  cssClass,
  options,
  label
}) {
  const startValue = cssClass?.properties?.[propertyName]?.value || 0;
  const [property, setProperty] = useState(startValue);

  useEffect(() => {
    setProperty(startValue);
  }, [cssClass, startValue]);

  return (
    <ContextConsumer>
      {({ updateClassProperty }) => (
        <div>
          {label && <p className="text-xs">{label}</p>}
          {options.map((option) => (
            <BadgeButton
              size="sm"
              isActive={option === property}
              value={property}
              onClick={() => {
                setProperty(option);
                updateClassProperty(cssClass, propertyName, option);
              }}
            >
              {option}
            </BadgeButton>
          ))}
        </div>
      )}
    </ContextConsumer>
  );
}
