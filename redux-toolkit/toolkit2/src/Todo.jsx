import React from 'react'

const Todo = ({title, body}) => {
    console.log(`todo title is ${title} body is ${body}`)
  return (
    <div>
        <h1>{title}</h1>
        <h2>{body}</h2>
    </div>
  )
}

export default Todo