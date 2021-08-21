import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Login from './login.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

