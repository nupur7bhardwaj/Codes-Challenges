import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyName from './Hello World';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div><MyName> 
      <li> I am curious person</li>
      <li>I want to learn things quickly</li>

    </MyName>
    </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
