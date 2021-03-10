import React from 'react'
import {ITask} from '../../../interfaces/interfaces'
import './todoItem.scss'

interface ITodoItemProps{
    task: ITask;
    deleteTask: (id:string) => void;
    checkTask: (id:string) => void;
}

const TodoItem = ({task,deleteTask,checkTask}:ITodoItemProps) => {
    return(
        
        <div className = 'todo-item' >
             <label className="container">
                <span className = {`${task.completed?'todo-item_completed':''}`}>{task.task}</span>
                <input type = 'checkbox' defaultChecked = {task.completed} onClick = {()=>checkTask(task.id)}></input>
                <span className="checkmark"></span>
            </label>
            <span className = 'todo-item__delete' onClick = {()=>deleteTask(task.id)}>delete</span> 
        </div>
    )
}

export default TodoItem;