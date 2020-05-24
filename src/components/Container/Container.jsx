import React, { useState } from 'react'
import { last } from 'lodash'
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
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const removeItem = id => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const lastItem = last(todos)
        const newItemId = lastItem ? lastItem.id + 1 : 0
        const newTodo = {
            id: newItemId,
            title,
            body
        }
        setTitle('')
        setBody('')
        setTodos([...todos, newTodo])
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const deleteItem = (id) => removeItem(id)

    const editItem = id => {
        const editingTodo = todos.find((todo) => todo.id === id)
        setTitle(editingTodo.title)
        setBody(editingTodo.body)
        removeItem(id)
    }

    return (
        <div className={style.container}>
            <h1 className={style.header}>To Do List</h1>
            <div className={style.inputSection}>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <textarea
                        name="body"
                        value={body}
                        onChange={handleBodyChange}
                    ></textarea>
                    <button>Add To Do</button>
                </form>
            </div>
            <ul className={style.todoList}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteHandler={deleteItem}
                        editHandler={editItem}
                    />
                ))}
            </ul>
        </div>
    )
}
