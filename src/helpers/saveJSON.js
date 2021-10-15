import beautify from "js-beautify";
export default function saveJSON({ classNames, elements }) {
  const txt = beautify(JSON.stringify({ classNames, elements }));
  const blob = new Blob([txt], {
    type: "application/json"
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  a.click();
}
