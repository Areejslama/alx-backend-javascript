export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
   const taskInblock = false;
   const task2Inblock = true;
  
  return [taskInblock, task2Inblock];

  }

  return [task, task2];
}
