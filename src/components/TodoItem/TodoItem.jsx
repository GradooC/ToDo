import React from 'react'

import style from './style.module.css'

export const TodoItem = ({
    todo: { title, body, id, isCompleted },
    deleteHandler,
    editHandler,
    completeHandler
}) => {
    const handleDelete = () => {
        deleteHandler(id)
    }

    const handleEdit = () => {
        editHandler(id)
    }

    const handleComplete = () => {
        completeHandler(id)
    }

    return (
        <li className={style.todoItem}>
            <h6>{title}</h6>
            <p>{body}</p>
            <input type="checkbox" name="competed" id="" onChange={handleComplete} checked={isCompleted} />
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </li>
    )
}
