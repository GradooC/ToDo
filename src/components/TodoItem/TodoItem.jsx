import React from 'react'

import style from './style.module.css'

export const TodoItem = ({
    todo: { title, body, id },
    deleteHandler,
    editHandler
}) => {
    const handleDelete = () => {
        deleteHandler(id)
    }

    const handleEdit = () => {
        editHandler(id)
    }
    return (
        <li className={style.todoItem}>
            <h6>{title}</h6>
            <p>{body}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </li>
    )
}
