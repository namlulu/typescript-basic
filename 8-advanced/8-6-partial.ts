{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldToUpdate };
  }

  const todo: ToDo = {
    title: 'lean TS',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };

  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
}
