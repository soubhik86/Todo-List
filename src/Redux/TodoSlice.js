

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {

    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },

    editTode: (state, action)=>{
      const index = state.findIndex(todo => todo.id === action.payload.id);
    
    }
    
  },
});

export const { addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
