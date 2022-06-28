export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo,
  }
};

export const receiveTodos = (todos) => {
  const object = {
    type: RECEIVE_TODOS,
    todos,
  };
  return object
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO, 
    todo,
  }
}