export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    throw Error('the argument must be a string');
  }
  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
