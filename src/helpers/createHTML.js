import { Fragment } from "react";
import ReactDOMServer from "react-dom/server";
import { html as beautify } from "js-beautify";

export default function createHTML({ classNames, elements }) {
  let classNamesCss = "";
  classNames.forEach((c) => {
    let properties = "";
    if (c.properties) {
      for (let [key, obj] of Object.entries(c.properties)) {
        properties += `${key}: ${obj.value}${obj.unit};\n`;
      }
    }
    classNamesCss +=
      `.${c.name} { \n${c.txt} \n${properties} } \n` +
      `.${c.name}:hover { ${c[":hover"]} } \n` +
      `.${c.name}::before { ${c[":before"]} } \n` +
      `.${c.name}::after { ${c[":after"]} } \n`;
  });

  const childElements = (childrenArray) =>
    childrenArray.map((el) => {
      const TagName = el.tag ? el.tag : Fragment;

      let elClassList = "";
      el.classNames &&
        el.classNames.forEach((name) => {
          elClassList += `${name} `;
        });

      return (
        <>
          {TagName !== Fragment ? (
            <>
              {TagName !== "img" ? (
                <TagName className={el.classNames && elClassList}>
                  {el.children && childElements(el.children)}
                </TagName>
              ) : (
                <TagName
                  src={el.src}
                  className={el.classNames && elClassList}
                />
              )}
            </>
          ) : (
            <TagName>{el.text && el.text}</TagName>
          )}
        </>
      );
    });

  const cssReset = `
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: currentColor;
  }`;
  const Main = () => {
    return (
      <>
        {childElements(elements)}
        <style id="css-reset">{cssReset}</style>
        <style>{classNamesCss}</style>
      </>
    );
  };
  return beautify(ReactDOMServer.renderToString(<Main />));
}
