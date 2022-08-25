import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CalDesign from './components/CalDesign';
// import {useState} from 'react';
// import React from 'react';

function App() {

  return (
    <>
    <Navbar title='Calculator' home='Home' about='About'/>
    <CalDesign/>
    </>
  );
}

export default App;
