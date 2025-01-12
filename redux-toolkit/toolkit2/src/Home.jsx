import React from 'react'
import Form from './Form'
import ListTodo from './ListTodo'

const Home = () => {
  return (
    <div>
        <h1 className='text-3xl text-bold font-semibold text-center'>TODO APPLICATION</h1>
        <Form />
        <ListTodo />
    </div>
  )
}

export default Home