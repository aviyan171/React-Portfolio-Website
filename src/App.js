
import './App.css';
import {useState} from 'react'
// import Datavisualization from './components/Data Visualization/Datavisualization';
import {Route,Routes,Link} from 'react-router-dom'
import SignIn from './components/SignIn';
import Home from './components/Home';
import AccountPage from './components/AccountPage';
import ProtectedRouts from './components/Protected';

function App() {
  return (
    <>
    <Link to='/'>  Signin Page</Link>
    <br />
    <Link to='/home'>  Home Page</Link>
    <br />
    <Link to='/account'>  Account Page</Link>
     <Routes>
      <Route  path='/' element={<SignIn/>}/>
      <Route element={<ProtectedRouts/>}>
      <Route  path='/home' element={<Home/>}/>
      <Route  path='/account' element={<AccountPage/>}/>
      </Route>
     </Routes>
    </>
  );
}

export default App;
