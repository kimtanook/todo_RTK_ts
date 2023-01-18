import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from 'interfaces';

const initialState: { todos: TodoType[] } = {
  todos: [],
};

const todoReducer = createSlice({
  name: 'todoReducer',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    editTodo: (state, action) => {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              body: action.payload.body,
            };
          } else {
            return todo;
          }
        }),
      };
    },
    confirmTodo: (state, action) => {
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    },
    allDelete: (state, action) => {
      return {
        todos: state.todos.filter((todo) => todo.isDone !== action.payload),
      };
    },
  },
});

export const todoActions = todoReducer.actions;
// export const {addTodo , deleteTodo editTodo, confirmTodo, allDelete} = todoReducer.actions;
export default todoReducer.reducer;
