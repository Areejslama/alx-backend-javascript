export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view1 = new DataView(buffer);

  if (position >= value || position < 0) {
    throw Error('Position outside range');
  }

  return view1;
}
