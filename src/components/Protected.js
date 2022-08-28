import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import SignIn from './SignIn';

//created a simple authentication funtion
const useAuth=()=>{
    const user={loggedIn:false}
    return user && user.loggedIn;
}

export default function ProtectedRouts() {
  const isAuth=useAuth()
  return isAuth ? <Outlet/>:<Navigate to='/'/> 
  //if user is authenicatied that means isloggedin === true, then they can navigate to other page and if user is not logged in they  can't navigate to another page
// you can see in code I cant navigate to another page
}
