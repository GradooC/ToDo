import React, { useState, useEffect } from 'react'
import { last } from 'lodash'
import { TodoItem } from '../TodoItem/TodoItem'

import style from './style.module.css'

export const Container = () => {
    const [todos, setTodos] = useState([])
    console.log("Container -> todos", todos)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos')) || []
        setTodos(todos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const updateItem = (id, newProps) => {
        const updatedItemIndex = todos.findIndex((todo) => todo.id === id)
        const newTodos = todos.map((todo) =>
            todo.id === updatedItemIndex ? { ...todo, ...newProps } : todo
        )
        setTodos(newTodos)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const lastItem = last(todos)
        const newItemId = lastItem ? lastItem.id + 1 : 0
        const newTodo = {
            id: newItemId,
            title,
            body,
            isCompleted: false
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

    const handleComplete = (id) => {
        const editingTodo = todos.find((todo) => todo.id === id)
        updateItem(id, { isCompleted: !editingTodo.isCompleted })
    }

    const deleteItem = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos)
    }

    const editItem = (id) => {
        const editedTodo = todos.find((todo) => todo.id === id)
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTitle(editedTodo.title)
        setBody(editedTodo.body)
        setTodos(filteredTodos)
    }

    return (
        <div className={style.container}>
            <h1 className={style.header}>To Do List</h1>
            <form onSubmit={handleOnSubmit} className={style.inputSection}>
                <input
                    className={style.title}
                    autoComplete="off"
                    placeholder="Enter Title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    className={style.body}
                    placeholder="Enter Task"
                    rows={3}
                    name="body"
                    value={body}
                    onChange={handleBodyChange}
                ></textarea>
                <button className={style.addButton}>Add To Do</button>
            </form>
            <ul className={style.todoList}>
                {[...todos]
                    .sort((a, b) => -a.title.localeCompare(b.title))
                    .map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteHandler={deleteItem}
                            editHandler={editItem}
                            completeHandler={handleComplete}
                        />
                    ))}
            </ul>
        </div>
    )
}
