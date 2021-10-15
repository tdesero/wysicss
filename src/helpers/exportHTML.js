import createHTML from "./createHTML";

export default function exportHTML(state) {
  const svgCode = createHTML(state);
  const blob = new Blob([svgCode], { type: "text/html" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "export.html";
  a.click();
}
