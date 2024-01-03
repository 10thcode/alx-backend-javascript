export default function iterateThroughObject(reportWithIterator) {
  const names = [];
  let { value } = reportWithIterator.next();

  while (value) {
    names.push(value);
    value = reportWithIterator.next().value;
  }

  return names.join(' | ');
}
