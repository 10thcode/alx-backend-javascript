export default function cleanSet(set, startcleanSet) {
  if (startcleanSet === "") return "";

  const str = [];

  for (const item of set.values()) {
    if (item.startsWith(startcleanSet)) str.push(item.slice(startcleanSet.length));
  }

  return str.join('-');
}
