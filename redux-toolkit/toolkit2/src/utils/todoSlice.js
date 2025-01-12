import { createSlice, nanoid } from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state,action)=>{
            const {todoId, todoTitle, todoBody} = action.payload
            const Todo={todoId, todoTitle,todoBody}
            state.push(Todo)
        },
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer

