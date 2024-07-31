export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
        throw Error('Invalid input: The first argument must be a Set');
    }

    if (typeof startString !== 'string') {
        throw Error('Invalid input: The second argument must be a string');
    }

  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
