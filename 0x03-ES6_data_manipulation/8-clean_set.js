export default function cleanSet(set, startcleanSet) {
  if (typeof startcleanSet !== 'string' || startcleanSet === '') return '';

  const str = [];

  for (const item of set.values()) {
    if (item && item.startsWith(startcleanSet)) str.push(item.slice(startcleanSet.length));
  }

  return str.join('-');
}
