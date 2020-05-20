import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Form from './components/Form';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Home/>

     <Form/>
  
    </div>
  );
}

export default App;
