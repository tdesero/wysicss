import { Fragment } from "react";
import ReactDOMServer from "react-dom/server";
import { html as beautify } from "js-beautify";

export default function createHTML({ classNames, elements, breakpoints }) {
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

    // maybe later i just need the current breakpoint for preview mode (if performance is bad...)
    if (c.breakpoints) {
      for (const [breakpoint, css] of Object.entries(c.breakpoints)) {
        let bpProps = "";
        if (css?.properties) {
          for (let [key, obj] of Object.entries(css.properties)) {
            bpProps += `${key}: ${obj.value}${obj.unit};\n`;
          }
        }
        classNamesCss += `@media screen and (max-width: ${breakpoints[breakpoint]}px) {\n
          .${c.name} {\n
          ${bpProps}
        }} \n`;
      }
    }
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
        <style
          id="css-reset"
          dangerouslySetInnerHTML={{ __html: cssReset }}
        ></style>
        <style>{classNamesCss}</style>
      </>
    );
  };
  return beautify(ReactDOMServer.renderToString(<Main />));
}
