import CssPropertyInput from "./CssPropertyInput";
import CssPropertyColorInput from "./CssPropertyColorInput";
import CssPropertyButtonGroup from "./CssPropertyButtonGroup";
import CssPropertyIconButtonGroup from "./CssPropertyIconButtonGroup";
import CssPropertyTextInput from "./CssPropertyTextInput";
import { Accordion } from "../common/Accordion";

//Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import CssPropertySelect from "./CssPropertySelect";
import {
  colorProperties,
  dimensionProperties,
  dimensionMinMaxProperties,
  imageProperties,
  fontFamilyProperty,
  fontColorProperty,
  fontProperties,
  fontWeightProperty,
  textAlignProperty,
  fontStyleProperty,
  textTransformProperty,
  textDecorationProperty,
  positionProperty,
  positionDirectionProperties,
  displayProperty,
  justifyContentProperty,
  alignItemsProperty,
  flexProperties,
  flexChildProperties,
  borderColorProperty,
  visbilityProperties,
  opacityProperty,
} from "./allProperties";
import { SpacingStyler } from "./SpacingStyler";
import BorderWidthStyler from "./BorderWidthStyler";
import BorderRadiusStyler from "./BorderRadiusStyler";
import BoxShadowStyler from "./BoxShadowStyler";

export default function CssProperties({ cssClass, elementSelected }) {
  return (
    <div>
      <Accordion title="Basic" isOpen={true}>
        <div className="flex gap-2">
          {colorProperties.map((p) => (
            <CssPropertyColorInput
              key={p.name}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
          {dimensionProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
        <div className="flex gap-2 mb-3">
          {dimensionMinMaxProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
      </Accordion>
      {elementSelected.tag === "img" && (
        <Accordion title="Image Settings" isOpen={true}>
          {imageProperties.map((p) => (
            <div key={p.name}>
              <CssPropertyIconButtonGroup
                propertyName={p.name}
                label={p.name}
                options={p.options}
                cssClass={cssClass}
              />
            </div>
          ))}
        </Accordion>
      )}
      <Accordion title="Typography" isOpen={true}>
        <div className="mb-3">
          <div className="flex gap-2">
            <CssPropertyTextInput
              propertyName={fontFamilyProperty.name}
              label={fontFamilyProperty.label}
              cssClass={cssClass}
            />
            <CssPropertyColorInput
              propertyName={fontColorProperty.name}
              label={fontColorProperty.label}
              cssClass={cssClass}
            />
          </div>
          <div className="flex gap-2">
            {fontProperties.map((p) => (
              <CssPropertyInput
                key={p.name}
                direction={p.direction}
                propertyName={p.name}
                label={p.label}
                cssClass={cssClass}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <CssPropertySelect
              propertyName={fontWeightProperty.name}
              label={fontWeightProperty.label}
              options={fontWeightProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              propertyName={textAlignProperty.name}
              options={textAlignProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              propertyName={fontStyleProperty.name}
              options={fontStyleProperty.options}
              cssClass={cssClass}
            />
          </div>
          <div className="flex gap-2">
            <CssPropertyIconButtonGroup
              propertyName={textTransformProperty.name}
              options={textTransformProperty.options}
              cssClass={cssClass}
            />
            <CssPropertyIconButtonGroup
              propertyName={textDecorationProperty.name}
              options={textDecorationProperty.options}
              cssClass={cssClass}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Position" isOpen={false}>
        <div className="flex gap-2">
          <CssPropertyButtonGroup
            propertyName={positionProperty.name}
            options={positionProperty.options}
            cssClass={cssClass}
          />
        </div>
        <div className="flex gap-2 mb-3">
          {positionDirectionProperties.map((p) => (
            <CssPropertyInput
              key={p.name}
              direction={p.direction}
              propertyName={p.name}
              label={p.label}
              cssClass={cssClass}
            />
          ))}
        </div>
      </Accordion>
      <Accordion title="Layout" isOpen={false}>
        <div className="mb-3">
          <CssPropertyButtonGroup
            propertyName={displayProperty.name}
            options={displayProperty.options}
            cssClass={cssClass}
          />
        </div>

        {cssClass?.properties?.display?.value.includes("flex") && (
          <>
            <div className="flex gap-2">
              <div className="mb-3">
                <p className="text-sm mb-2">
                  Justify{" "}
                  <span className="text-xs text-gray-400">(Flex only)</span>
                </p>

                <CssPropertyIconButtonGroup
                  propertyName={justifyContentProperty.name}
                  options={justifyContentProperty.options}
                  cssClass={cssClass}
                />
              </div>
              <div className="mb-3">
                <p className="text-sm mb-2">
                  Align{" "}
                  <span className="text-xs text-gray-400">(Flex only)</span>
                </p>
                <CssPropertyIconButtonGroup
                  propertyName={alignItemsProperty.name}
                  options={alignItemsProperty.options}
                  cssClass={cssClass}
                />
              </div>
            </div>
            <div className="flex mb-3">
              {flexProperties.map((p) => (
                <div className="w-1/3" key={p.name}>
                  <CssPropertyIconButtonGroup
                    propertyName={p.name}
                    label={p.name}
                    options={p.options}
                    cssClass={cssClass}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        <p className="text-sm">Flex Child</p>
        <div className="flex mb-3">
          {flexChildProperties.map((p) => (
            <div className="w-1/3" key={p.name}>
              <CssPropertyIconButtonGroup
                propertyName={p.name}
                label={p.name}
                options={p.options}
                cssClass={cssClass}
              />
            </div>
          ))}
        </div>
      </Accordion>
      <Accordion title="Spacing" isOpen={false}>
        {SpacingStyler(cssClass)}
      </Accordion>
      <Accordion title="Border" isOpen={false}>
        <div className="flex mb-3">
          <div className="flex-grow">
            <BorderWidthStyler cssClass={cssClass} />
          </div>
          <div className="flex-grow">
            <BorderRadiusStyler cssClass={cssClass} />
          </div>
          <div className="flex-grow">
            <CssPropertyColorInput
              propertyName={borderColorProperty.name}
              label={borderColorProperty.label}
              cssClass={cssClass}
            />
          </div>
        </div>
      </Accordion>
      <Accordion title="Effects" isOpen={true}>
        <BoxShadowStyler cssClass={cssClass} />
      </Accordion>
      <Accordion title="Visibility" isOpen={false}>
        <div className="flex gap-2">
          {visbilityProperties.map((p) => (
            <div key={p.name}>
              <CssPropertyIconButtonGroup
                label={p.name}
                propertyName={p.name}
                options={p.options}
                cssClass={cssClass}
              />
            </div>
          ))}
        </div>
        <CssPropertyInput
          propertyName={opacityProperty.name}
          label={opacityProperty.label}
          cssClass={cssClass}
          hasUnit={false}
          step="0.1"
          min="0"
          max="1"
        />
      </Accordion>
    </div>
  );
}
