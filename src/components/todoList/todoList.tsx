import React from 'react';
import {ITask} from '../../interfaces/interfaces'
import TodoItem from './todoItem/todoItem'
import './todoList.scss';
import { observer} from 'mobx-react';
import mainStore from '../../stores/mainStore';

const TodoList = observer(() => {
    const {tasks,deleteTask,completeTask} = mainStore
    return(
      
        <div className = 'todo-list'>
            <span className = 'todo-list__title'>Tasks to do<span>:</span> </span>
            {tasks.slice().sort((a:ITask,b:ITask) => b.date-a.date).map((el: ITask) => {
                return <TodoItem task ={el}
                 key = {el.id}
                 deleteTask = {deleteTask}
                 checkTask = {completeTask}
                 ></TodoItem>
            })}
        </div>
    )
})
export default TodoList;
