import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const ListTodo = () => {

    const todosList = useSelector((state) => state.todos) // Fetch todos from Redux state
    console.log(todosList)
    const [List, setList] = useState(todosList) // Set initial state to todosList

    return todosList ? (
        <div>
            <h1>Todos List</h1>
            {
                List.map((e, index) => {
                    return <Todo key={index} title={e.todoTitle} body={e.todoBody} />
                })
            }
        </div>
    ) : (
        <div></div>
    )
}

export default ListTodo
