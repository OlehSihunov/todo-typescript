import React from 'react'
import { NavLink } from "react-router-dom";
import './header.scss'
import img from '../../img/1.jpg'
import rootStore from '../../stores/rootStore';
import { observer } from 'mobx-react';

const Header = observer(() => {
    const {user,logOut}  = rootStore.userStore
    
    return (
        <div className = 'header'>
            <NavLink to ='/'><span className = 'header__title '>Do.it</span></NavLink>
            <span className = 'header__user'>
                {!user.login?
                 <React.Fragment>
                      <NavLink to ='/signup'>SignUp</NavLink>
                      <NavLink to ='/signin'>SignIn</NavLink>
                 </React.Fragment>
                : 
                <React.Fragment>
                     <img src = {img} alt= 'user'/> 
                     <i onClick ={()=>logOut()}>{user.login}</i>

                </React.Fragment>
            }
               
                </span>
        </div>
    )
}) 

export default Header;