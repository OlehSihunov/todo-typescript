import React from 'react';
import TodoList from './components/todoList/todoList';
import './App.scss';
import AddNewTodoForm from './components/addNewTodoFrom/addNewTodoForm';
import Header from './components/header/header';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import SignInForm from './components/signInForm/signInForm';
import SignUpForm from './components/signUpForm/signUpForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
            <Route exact path="/">
            <AddNewTodoForm ></AddNewTodoForm>
            <TodoList ></TodoList>
            </Route>
            <Route path="/signin">
              <SignInForm></SignInForm>
              </Route>
            <Route path="/signup">
              <SignUpForm></SignUpForm>
            </Route>
            <Route  path="/">
            <AddNewTodoForm ></AddNewTodoForm>
            <TodoList ></TodoList>
            </Route>
          </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
