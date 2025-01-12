import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './utils/todoSlice'


const Form = () => {
    
    const todoObject = {
        todoTitle: '',
        todoBody: '',
    }

    const [todo, setTodo] = useState(todoObject)
    const dispatch = useDispatch()

    const handleTodoTitle = (title)=>{
        setTodo({
            ...todo,
            todoTitle: title
        })
    }

    const handleTodoBody = (body)=>{
        setTodo({
            ...todo,
            todoBody: body
        })
    }

    const handleAddTodo = ()=>{
        dispatch(addTodo(todo))
    }
    
    console.log(todo)

  return (
    <div>
        <section>
            <h1>Form</h1>
                <div>
                    <section>
                        <input className='w-80 h-10 m-5 p-2'
                            placeholder='mention the title'
                            //value={todo.todoTitle}
                            onChange={(e)=>handleTodoTitle(e.target.value)}
                        >
                        </input>
                    </section>
                    
                    <section>
                        <input className='w-96 h-20 m-5 p-2'
                            placeholder='write here'
                            //value={todo.todoBody}
                            onChange={(e)=>handleTodoBody(e.target.value)}
                        >
                        </input>
                    </section>
                    
                </div>                
            <button className='w-20 h-10 m-2 p-2 border' onClick={()=>handleAddTodo()}>AddTodo</button>
        </section>
    </div>
  )
}

export default Form