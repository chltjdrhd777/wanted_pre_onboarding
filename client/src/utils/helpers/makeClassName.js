export function makeClassName(nameList) {
  if (!nameList.length) return "";

  if (nameList.length === 1) {
    if (nameList[0]) return String(nameList[0]);

    return "";
  }

  return nameList.reduce((acc, cur) => {
    if (cur) {
      acc = acc + " " + String(cur);
      return acc;
    }
    return acc;
  }, "");
}
