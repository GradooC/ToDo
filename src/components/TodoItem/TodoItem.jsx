import React from 'react'

import { ReactComponent as Edit } from '../../assets/edit.svg';
import { ReactComponent as Trash } from '../../assets/trash.svg';
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
            <h4 className={style.title}>{title}</h4>
            <p className={style.body}>{body}</p>
            <div className={style.controls}>
                <input
                className={style.checkbox}
                    type="checkbox"
                    name="competed"
                    onChange={handleComplete}
                    checked={isCompleted}
                />
                <div className={style.deleteBtn} onClick={handleDelete}><Trash /></div>
                <div className={style.editBtn} onClick={handleEdit}><Edit /></div>
            </div>
        </li>
    )
}
