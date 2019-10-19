
const initialState = {
  todos: [],
};

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state,
        todos: [...state.todos, { id: action.payload.id, text: action.payload.text, completed: false }],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== action.id)],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
  }
  return state;
}