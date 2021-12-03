import { useState, useContext, useEffect } from "react";
import NumberControl from "../common/NumberControl";
import { Context } from "./../../context";
import * as Icon from "react-feather";
import { ColorPicker } from "../common/ColorPicker";

const BOX_SHADOW = "box-shadow";

const BoxShadowStyler = ({ cssClass }) => {
  const { updateClassProperty } = useContext(Context);

  /* Box Shadow is stored locally as array like [ x, y, blur, spread, rgba(0,0,0,1)] */
  let startVal = cssClass?.properties?.[BOX_SHADOW]?.value
    ?.split(", ")
    .map((shadow) => shadow.split(" "));

  const [shadows, setShadows] = useState(startVal || []);

  useEffect(() => {
    setShadows(startVal || []);
  }, [cssClass]);

  const combinedStyles = (shadows) => {
    return shadows.map((s) => s.join(" ")).join(", ");
  };

  const setPropertyVals = (val, outerIndex, innerIndex) => {
    const newShadows = [...shadows];
    newShadows[outerIndex] = [...newShadows[outerIndex]];
    newShadows[outerIndex][innerIndex] = val;

    // local state
    setShadows(newShadows);

    console.log(combinedStyles(newShadows));

    // global app state / context
    updateClassProperty(cssClass, BOX_SHADOW, combinedStyles(newShadows));
  };

  const addNewShadow = () => {
    const newShadows = [...shadows];
    newShadows.push(["10px", "10px", "10px", "10px", "rgba(0,0,0,1)"]);
    setShadows(newShadows);
    updateClassProperty(cssClass, BOX_SHADOW, combinedStyles(newShadows));
  };

  const removeShadow = (index) => {
    const newShadows = [...shadows];
    newShadows.splice(index, 1);
    setShadows(newShadows);
    updateClassProperty(cssClass, BOX_SHADOW, combinedStyles(newShadows));
  };

  return (
    <div>
      <p className="text-sm">
        <button onClick={addNewShadow}>Box Shadow +</button>
      </p>
      {shadows?.map((shadowArr, outerIndex) => {
        return (
          shadowArr[0] && (
            <div className="flex gap-2 justify-center">
              <div className="border rounded p-2 my-1 flex-grow">
                <label className="text-xs block text-gray-400">x</label>
                <div className="flex">
                  <NumberControl
                    value={shadowArr[0].replace("px", "")}
                    onChange={(val) => {
                      setPropertyVals(val + "px", outerIndex, 0);
                    }}
                  />
                </div>
              </div>
              <div className="border rounded p-2 my-1 flex-grow">
                <label className="text-xs block text-gray-400">y</label>
                <div className="flex">
                  <NumberControl
                    value={shadowArr[1].replace("px", "")}
                    onChange={(val) => {
                      setPropertyVals(val + "px", outerIndex, 1);
                    }}
                  />
                </div>
              </div>
              <div className="border rounded p-2 my-1 flex-grow">
                <label className="text-xs block text-gray-400">Blur</label>
                <div className="flex">
                  <NumberControl
                    value={shadowArr[2].replace("px", "")}
                    onChange={(val) => {
                      setPropertyVals(val + "px", outerIndex, 2);
                    }}
                  />
                </div>
              </div>
              <div className="border rounded p-2 my-1 flex-grow">
                <label className="text-xs block text-gray-400">Spread</label>
                <div className="flex">
                  <NumberControl
                    value={shadowArr[3].replace("px", "")}
                    onChange={(val) => {
                      setPropertyVals(val + "px", outerIndex, 3);
                    }}
                  />
                </div>
              </div>
              <ColorPicker
                color={shadowArr[4]}
                onChange={(color) => {
                  const rgba = `rgba(${Object.values(color.rgb).join(",")})`;
                  setPropertyVals(rgba, outerIndex, 4);
                }}
              />
              <button onClick={() => removeShadow(outerIndex)}>
                <Icon.Trash size={12} />
              </button>
            </div>
          )
        );
      })}
    </div>
  );
};

export default BoxShadowStyler;
