import React from 'react';
import {ITask} from '../../interfaces/interfaces'
import TodoItem from './todoItem/todoItem'
import './todoList.scss';

interface ITodoListProps {
    tasks: ITask[];
    modifyTasks: (newTasks:ITask[])=>void;
}
const TodoList = ({tasks,modifyTasks}:ITodoListProps) => {
    const handleDelete  = (id:string) => {
        modifyTasks(tasks.filter(el => el.id !== id))
    }
    const handleCheck = (id:string) => {
        modifyTasks(tasks.map(el =>el.id===id ?{...el,completed: !el.completed} : el))
    }
    return(
        <div className = 'todo-list'>
            <span className = 'todo-list__title'>Tasks to do<span>:</span> </span>
            {tasks.sort((a,b) => b.date-a.date).map(el => {
                console.log(el.task +" " +el.completed);
                return <TodoItem task ={el}
                 key = {el.id}
                 deleteTask = {(id:string)=>handleDelete(id)}
                 checkTask = {(id:string) => handleCheck(id)}></TodoItem>
            })}
        </div>
    )
}

export default TodoList;
