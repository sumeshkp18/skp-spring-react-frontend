import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [message, SetMessage] = useState("");

  useState(() => {
    fetch("https://skp-spring-react-backend.azurewebsites.net/api/hello")
      .then(response => response.text())
      .then(message => {
        SetMessage(message)
      });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React #2
        </a>
      </header>
    </div>
  );
}

export default App;
