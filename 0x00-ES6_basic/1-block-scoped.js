export default function taskBlock(trueOrFalse) {
  let task2 = true;
  let task = false;

  if (trueOrFalse) {
    task = false;
    task2 = true;
  }

  return [task, task2];
}
