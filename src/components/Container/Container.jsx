import React, { useState } from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

import style from './style.module.css'

const initState = [
    {
        id: 0,
        title: 'Lorem, ipsum.',
        body:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat tempora et consequatur maxime pariatur nam!'
    },
    {
        id: 1,
        title: 'Lorem',
        body:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quaerat tempora!'
    }
]

export const Container = () => {
    const [todos, setTodos] = useState(initState)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.title.value)
        console.log(e.target.body.value)
    }

    return (
        <div className={style.container}>
            <h1 className={style.header}>To Do List</h1>
            <div className={style.inputSection}>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" name="title" />
                    <textarea name="body"></textarea>
                    <button>Add To Do</button>
                </form>
            </div>
            <ul className={style.todoList}>
                {todos.map(({ id, title, body }) => (
                    <TodoItem key={id} title={title} body={body} />
                ))}
            </ul>
        </div>
    )
}
