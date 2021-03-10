import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { IUser } from '../../interfaces/interfaces'
import rootStore from '../../stores/rootStore'

const SignUpForm = observer(() => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [repeatPassword,setRepeatPassword] = useState('')
    const {addNewUser} = rootStore.userStore 
    const history = useHistory()
    
    const handleClick = () => {
        
        const newUser:IUser = {
            login,
            password
        }
        setLogin('')
        setPassword('')
        setRepeatPassword('')
        addNewUser(newUser)
        history.push('/')
    }

    return(
    <div className = 'sign-in-form'>
        <label htmlFor='login'>login</label>
        <input type='text' name = 'login' value = {login} onChange = {e=>setLogin(e.target.value)}/>
        <label htmlFor='password'>password</label>
        <input type='password' name = 'password' value = {password} onChange = {e=>setPassword(e.target.value)}/>
        <label htmlFor='repeat-password'>repeat password</label>
        <input type='password' name = 'repeat-password' value = {repeatPassword} onChange = {e=>setRepeatPassword(e.target.value)}/>
        <button onClick = {()=>handleClick()}>Sign in</button>
    </div>)
})

export default SignUpForm