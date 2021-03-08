import React, {useState} from 'react';
import TodoList from './components/todoList/todoList';
import {ITask} from './interfaces/interfaces'
import './App.scss';
import AddNewTodoForm from './components/addNewTodoFrom/addNewTodoForm';
import Header from './components/header/header';



function App() {
  const [taskList,setTaskList] = useState<ITask[]>([
    {id:'1', task: 'Make smth1', date: Date.now(), completed: false},
    {id:'2', task: 'Make smth2', date: Date.now(), completed: false},
    {id:'3', task: 'Make smth3', date: Date.now(), completed: false},
    {id:'4', task: 'Make smth4', date: Date.now(), completed: false},
    {id:'5', task: 'Make smth5', date: Date.now(), completed: false},
  ])
  const addNewTask = (task:ITask) => {
    setTaskList([...taskList,task])
  }
  return (
    <div className="App">
      <Header></Header>
      <AddNewTodoForm modifyTasks = {addNewTask}></AddNewTodoForm>
      <TodoList tasks = {taskList} modifyTasks = {setTaskList}></TodoList>
    </div>
  );
}

export default App;
