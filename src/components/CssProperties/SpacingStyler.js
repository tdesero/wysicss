import CssPropertyInputSmall from "./CssPropertyInputSmall";

export function SpacingStyler(cssClass) {
  return (
    <div className="relative text-center h-56 border rounded text-xs text-right">
      <div className="absolute top-0 left-0 text-gray-400 p-1">Margin</div>
      <div className="absolute inset-y-0 left-0 flex items-center p-3">
        <div className="w-12">
          <CssPropertyInputSmall
            key={"margin-left"}
            direction={"x"}
            propertyName={"margin-left"}
            cssClass={cssClass}
          />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center p-3">
        <div className="w-12">
          <CssPropertyInputSmall
            key={"margin-right"}
            direction={"x"}
            propertyName={"margin-right"}
            cssClass={cssClass}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 flex justify-center p-3">
        <div className="w-12">
          <CssPropertyInputSmall
            key={"margin-top"}
            direction={"y"}
            propertyName={"margin-top"}
            cssClass={cssClass}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center p-3">
        <div className="w-12">
          <CssPropertyInputSmall
            key={"margin-bottom"}
            direction={"y"}
            propertyName={"margin-bottom"}
            cssClass={cssClass}
          />
        </div>
      </div>
      <div className="relative text-center rounded border border-gray-500 h-24 my-16 mx-20">
        <div className="absolute top-0 left-0 text-gray-400 p-1">Padding</div>
        <div className="absolute rounded inset-y-0 left-0 flex items-center p-3">
          <div className="w-12">
            <CssPropertyInputSmall
              key={"padding-left"}
              direction={"x"}
              propertyName={"padding-left"}
              cssClass={cssClass}
            />
          </div>
        </div>
        <div className="absolute rounded inset-y-0 right-0 flex items-center p-3">
          <div className="w-12">
            <CssPropertyInputSmall
              key={"padding-right"}
              direction={"x"}
              propertyName={"padding-right"}
              cssClass={cssClass}
            />
          </div>
        </div>
        <div className="absolute rounded inset-x-0 top-0 flex justify-center p-3">
          <div className="w-12">
            <CssPropertyInputSmall
              key={"padding-top"}
              direction={"y"}
              propertyName={"padding-top"}
              cssClass={cssClass}
            />
          </div>
        </div>
        <div className="absolute rounded inset-x-0 bottom-0 flex justify-center p-3">
          <div className="w-12">
            <CssPropertyInputSmall
              key={"padding-bottom"}
              direction={"y"}
              propertyName={"padding-bottom"}
              cssClass={cssClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
