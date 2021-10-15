export default function deepClone(a) {
  return JSON.parse(JSON.stringify(a));
}
