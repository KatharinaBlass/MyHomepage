import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';

function App() {
  const Text = styled.div`
    background-color: #000;
  `
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Text>hello</Text>
      </header>
    </div>
  );
}

export default App;
