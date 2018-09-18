import UUID from 'uuid-js';

function createId() {
  return UUID.create(1).toString();
}

export function generateSampleTasks() {
  return [
    {
      id: createId(),
      task: 'wash dishes',
      isCompleted: false,
      data: '01-01-2018',
    },
    {
      id: createId(),
      task: 'clean teeth',
      isCompleted: true,
      data: '02-02-2018',
    },
  ];
}

export function createTask(tasks, task) {
  return [...tasks, { ...task, id: createId() }];
}

export function editTask(tasks, task) {
  const index = tasks.findIndex(todo => todo.id === task.id);

  return [
    ...tasks.slice(0, index),
    {
      ...task,
    },
    ...tasks.slice(index + 1),
  ];
}
