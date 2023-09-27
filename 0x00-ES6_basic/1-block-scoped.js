export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // 'task' is assigned a value but never used   no-unused-vars
    const task2 = false; // 'task' is assigned a value but never used   no-unused-vars
    return [task, task2];
  }

  return [task, task2];
}
