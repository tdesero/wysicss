import { useState } from "react";
import FormGroup from "./common/FormGroup";

const ALLOWED_TAGS = [
  "div",
  "span",
  "ul",
  "li",
  "nav",
  "main",
  "a",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
];

export default function ElementInfos({
  elementSelected,
  text,
  setText,
  changeElementText,
  changeElementTag,
  changeElementSrc,
}) {
  const [tag, setTag] = useState(elementSelected && elementSelected.tag);
  const [src, setSrc] = useState(
    (elementSelected && elementSelected.src) || ""
  );

  return (
    <>
      {elementSelected && elementSelected.tag === false && (
        <FormGroup
          btnText="Change Text"
          value={text}
          onChange={setText}
          onClick={() => {
            changeElementText(elementSelected.id, text);
          }}
        />
      )}
      {elementSelected && elementSelected.tag && (
        <FormGroup
          btnText="Change Tag"
          value={tag}
          onChange={(val) => {
            setTag(val);
          }}
          onClick={() => {
            if (ALLOWED_TAGS.indexOf(tag) > -1) {
              changeElementTag(elementSelected.id, tag);
            } else {
              console.log("Error: Allowed Tags: ", ALLOWED_TAGS);
            }
          }}
        />
      )}
      {elementSelected && elementSelected.tag === "img" && (
        <FormGroup
          btnText="Change Image Source"
          value={src}
          onChange={(val) => {
            setSrc(val);
          }}
          onClick={() => {
            changeElementSrc(elementSelected.id, src);
          }}
        />
      )}
    </>
  );
}
