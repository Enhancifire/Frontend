import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Post from './components/Test1/Post';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Blog from './components/Blog/Blog';

function App() {

  
  const [username, setUsername] = useState();

  const IsAuthed = ({children}) => {
    
  if(username){
    return children
  }else{
    return <Navigate to='/login' />
  }
  // return username === null
  // ?console.log(username) 
  // :<Navigate to='/login'/>
}


  useEffect(() => {
    if(localStorage.getItem('username')){
      setUsername(localStorage.getItem('username'))
      console.log(localStorage.getItem('username'))
    }else{
      console.log('no user found')
    }
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Anon-Blog</div>
        <div className="navbar-items">
         <div className="navbar-home " onClick={()=>{return <Navigate to='/posts' />}}>Home </div>
          {username?
          <div className="navbar-post">
            <button onClick={console.log('redirecting')} className="navbar-newPost">New Post</button>
          </div>: (<><a href='/signin'><div className="navbar-post">
            <button className="navbar-newPost">Sign In</button>
          </div></a>
          <a href='/login'><div className="navbar-post">
          <button className="navbar-newPost">Log In</button>
        </div></a></>
          )
          
          }
        </div>
      </nav>

    <BrowserRouter>
      <Routes>

         <Route path="login" element={<div className="loginWrapper">
               <Login setUsername={setUsername} />
            </div>}>
           
         </Route>

         <Route path="signin" element={<div className="loginWrapper">
               <Signin />
            </div>}>
           
         </Route>

         <Route path="posts" element={
          <>
          <div className="Post-Component"><Post /><Post /></div>
         </>
         }>
         </Route>
      </Routes>
    
    </BrowserRouter>

    
    </div>
  );
}

export default App;
