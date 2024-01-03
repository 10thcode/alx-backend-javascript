export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (let idx of array) {
    const value = idx;
    newArray.push(appendString + value);
  }

  return newArray;
}
