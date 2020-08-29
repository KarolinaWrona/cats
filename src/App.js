import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './navigation/routes/Routes';
import Menu from './navigation/menu/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
    
      <Menu/>
      <Routes/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
