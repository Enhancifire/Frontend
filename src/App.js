import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
