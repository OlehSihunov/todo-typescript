import React, { useState } from 'react'
import { useHistory } from 'react-router'
import rootStore from '../../stores/rootStore'
import './signInForm.scss'

const SignInForm = () => {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const {logIn} = rootStore.userStore
    const history = useHistory()
    const handleClick = () => {
        console.log('login ' + login)
        console.log('password ' + password)
        logIn({login,password})
        history.push('/')
    }

    return(
    <div className = 'sign-in-form'>
        <label htmlFor='login'>login</label>
        <input type='text' name = 'login' value = {login} onChange = {e=>setLogin(e.target.value)}/>
        <label htmlFor='password'>password</label>
        <input type='password' name = 'password' value = {password} onChange = {e=>setPassword(e.target.value)}/>
        <button onClick = {()=>handleClick()}>Sign in</button>
    </div>)
}

export default SignInForm