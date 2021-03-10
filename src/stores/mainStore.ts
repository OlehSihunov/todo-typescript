import {action,  makeObservable,  observable} from 'mobx'
import {ITask} from '../interfaces/interfaces'

class Tasks  {
    constructor(){
        makeObservable(this)
    }
    @observable tasks:ITask[] = [
        {id:'1', task: 'Make smth1', date: Date.now(), completed: false},
        {id:'2', task: 'Make smth2', date: Date.now(), completed: false},
        {id:'3', task: 'Make smth3', date: Date.now(), completed: true},
        {id:'4', task: 'Make smth4', date: Date.now(), completed: false},
        {id:'5', task: 'Make smth5', date: Date.now(), completed: false},
      ]
    @action deleteTask = (id:string) => {
        this.tasks= this.tasks.filter(el => el.id !== id).slice()
    }
     
    @action completeTask = (id:string) => {
        this.tasks = this.tasks.map(task=>task.id===id?{...task,completed:!task.completed}:task)

    }
    @action addNewTask = (newTask:ITask) => {
        this.tasks = [...this.tasks, newTask]
        

    }   
}

const mainStore  = new Tasks()
export default mainStore;