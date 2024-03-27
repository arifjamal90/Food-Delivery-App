import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MyContext from './component/context/MyContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MyContext>
  <App />
  </MyContext>
  </BrowserRouter>
)
