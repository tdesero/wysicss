export default function makeSafeForCSS(name) {
  return name.replace(
    /[!\"#$%&'\s*\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g,
    ""
  );
}
