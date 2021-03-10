import React from 'react';
import TodoList from './components/todoList/todoList';
import './App.scss';
import AddNewTodoForm from './components/addNewTodoFrom/addNewTodoForm';
import Header from './components/header/header';



function App() {

  return (
    <div className="App">
      <Header></Header>
      <AddNewTodoForm ></AddNewTodoForm>
      <TodoList ></TodoList>
    </div>
  );
}

export default App;
