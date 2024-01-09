export default function hasValuesFromArray(set, array) {
  let value = true;

  array.forEach((item) => {
    if (!set.has(item)) value = false;
  });

  return value;
}
