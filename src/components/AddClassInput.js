import { useState } from "react";
import { ContextConsumer } from "../context";
import FormGroup from "./common/FormGroup";
import BadgeAddInput from "./common/BadgeAddInput";
import { SelectClassContext } from "./InspectorPanel";

export default function AddClassInput({ classNameRecieverEl, selectClass }) {
  return (
    <>
      <ContextConsumer>
        {({ addClassToElement, getClassByName }) => (
          <BadgeAddInput
            onAdd={(newClassName) => {
              addClassToElement(classNameRecieverEl.id, newClassName);
              selectClass(getClassByName(newClassName));
            }}
            size="lg"
          />
        )}
      </ContextConsumer>
    </>
  );
}
