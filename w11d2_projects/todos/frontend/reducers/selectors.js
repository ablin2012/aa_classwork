export const allTodos = (state) => {
  const array = Object.values(state.todos);
  return array
}

export const stepsByTodoId = (state, todoId) => {
    const array = Object.values(state.steps);
    array = array.filter(el => el.todoId === todoId);
    return array
}