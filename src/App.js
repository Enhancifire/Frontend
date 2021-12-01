import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

import Post from './components/Test1/Post';
import Login from './components/Login/Login'

function App() {


 const [username, setUsername] = useState('');

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo">Anon-Blog</div>
        <div className="navbar-items">
          <div className="navbar-home">Home</div>
          <div className="navbar-post">
            <button className="navbar-newPost">New Post</button>
          </div>
        </div>
      </nav>
    <div className="mainBlog">
     
    </div>
    <div className="loginWrapper">
    <Login setUsername={setUsername} />
    </div>
    </div>
  );
}

export default App;
