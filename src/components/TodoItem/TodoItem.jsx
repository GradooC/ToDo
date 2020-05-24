import React from 'react'

import style from './style.module.css'

export const TodoItem = ({ title, body }) => {
    const handleDelete = () => {

    }

    const handleEdit = () => {
        
    }
    return (
        <li className={style.todoItem}>
            <h6>{title}</h6>
            <p>{body}</p>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit} >Edit</button>
        </li>
    )
}
