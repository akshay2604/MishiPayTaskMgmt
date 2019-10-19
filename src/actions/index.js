export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id,
  };
}