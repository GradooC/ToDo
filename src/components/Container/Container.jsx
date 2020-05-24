import React, { useState } from 'react'
import { last } from 'lodash';
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
        const lastItem = last(todos)
        const newItemId = lastItem ? lastItem.id + 1 : 0
        const newTodo = {
            id: newItemId,
            title: e.target.title.value,
            body: e.target.body.value
        }
        setTodos([...todos, newTodo])
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
