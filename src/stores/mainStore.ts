import {action,  makeObservable,  observable} from 'mobx'
import {ITask} from '../interfaces/interfaces'

export default class Tasks  {
    constructor(){
        makeObservable(this)
    }
    @observable tasks:ITask[] = JSON.parse(localStorage.getItem('tasks')||'[]')
    @action deleteTask = (id:string) => {
        this.tasks= this.tasks.filter(el => el.id !== id).slice()
        this.updateTasks()
    }
     
    @action completeTask = (id:string) => {
        this.tasks = this.tasks.map(task=>task.id===id?{...task,completed:!task.completed}:task)
        this.updateTasks()

    }
    @action addNewTask = (newTask:ITask) => {
        this.tasks = [...this.tasks, newTask]
        console.log('upd')
        this.updateTasks()
    }

    @action getTasks = () => {
        const currentUser = JSON.parse(localStorage.getItem('user')||'{}')
        
        return this.tasks.filter(e=>e.userLogin === currentUser.login)
        
    }
    updateTasks() {
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}
