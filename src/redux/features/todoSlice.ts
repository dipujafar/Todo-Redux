import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


type TTodo = {
    id: string,
    title: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[]
}

const initialState : TInitialState   = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodos : (state, action: PayloadAction<TTodo>)=>{
            state.todos.push({...action.payload, isCompleted: false})
        },
        removeTodos: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo=> todo?.id !== action?.payload)
        },
        toggleCompleted: (state, action: PayloadAction<string>)=>{
            const task = state.todos.find((item)=> item.id === action.payload);
            task!.isCompleted = !task?.isCompleted
        }
    }
});

export const {addTodos, removeTodos, toggleCompleted} = todoSlice.actions;

export default todoSlice.reducer;