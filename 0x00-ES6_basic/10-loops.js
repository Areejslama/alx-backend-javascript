export default function appendToEachArrayValue(array, appendString) {
  const newstring = [];
  for (const value of array) {
    newstring.push(appendString + value);
  }

  return newstring;
}
