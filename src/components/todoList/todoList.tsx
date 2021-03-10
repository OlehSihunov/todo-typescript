import React from 'react';
import {ITask} from '../../interfaces/interfaces'
import TodoItem from './todoItem/todoItem'
import './todoList.scss';
import { observer} from 'mobx-react';
import rootStore from '../../stores/rootStore';

const TodoList = observer(() => {
    const {tasks,getTasks,deleteTask,completeTask} = rootStore.tasksStore
    const {user} = rootStore.userStore
    return(
      
        <div className = 'todo-list'>
            <span className = 'todo-list__title'>Tasks to do<span>:</span> </span>
            {tasks?true:false}
            {user.login?
             getTasks().slice().sort((a:ITask,b:ITask) => b.date-a.date).map((el: ITask) => {
                return <TodoItem task ={el}
                 key = {el.id}
                 deleteTask = {deleteTask}
                 checkTask = {completeTask}
                 ></TodoItem>}) 
            :
            <h1>You neen to login</h1>
        }
        </div>
    )
})
export default TodoList;
