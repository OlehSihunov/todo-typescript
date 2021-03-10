import {action,  makeObservable,  observable} from 'mobx'
import {IUser} from '../interfaces/interfaces'


 export default class Users  {
    constructor(){
        makeObservable(this)
        
    }

    @observable user:IUser = JSON.parse(localStorage.getItem('user')||'{}')
    @observable users:IUser[] = JSON.parse(localStorage.getItem('users')||'[]')
    @action logOut = () => {
       
        this.user = JSON.parse('{}')
        this.updateUsers()
    }
     
    @action logIn = (pUser:IUser) => {
        const tUser = this.users.find(user => user.login ===pUser.login && user.password === pUser.password)
        if(tUser){
            this.user =(tUser)
            this.updateUsers()
        } else {
            alert('No such user')
        }
        
    }
    @action addNewUser = (newUser:IUser) => {
        this.users = [...this.users, newUser]
        this.user = newUser
        this.updateUsers()

    }

    @action getCurrentUserLogin = () => this.user.login
    updateUsers() {
        localStorage.setItem('users',JSON.stringify(this.users))
        localStorage.setItem('user',JSON.stringify(this.user))
    }
    
}
