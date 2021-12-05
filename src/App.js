import { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Post from './components/Test1/Post';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';

function App() {

  
  const [username, setUsername] = useState();

  const IsAuthed = ({children}) => {
  const userAuthed = username;

  return userAuthed != null
  ?children 
  :<Navigate to='/login'/>
}

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Anon-Blog</div>
        <div className="navbar-items">
        <a href="/posts" style={{"text-decoration":"none"}}><div className="navbar-home">Home</div></a>
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
          <IsAuthed> 
         <div className="Post-Component"><Post /><Post /></div>
         </IsAuthed>
         }>
         </Route>
      </Routes>
    
    </BrowserRouter>

    
    </div>
  );
}

export default App;
