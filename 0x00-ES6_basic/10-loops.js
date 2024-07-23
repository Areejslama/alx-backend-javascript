export default function appendToEachArrayValue(array, appendString) {
   let value = array[idx];
   for (let idx of array) {
    value = appendString + value;
  }

  return value;
}
