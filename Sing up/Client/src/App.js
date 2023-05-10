import './App.css';
import React, { Component }  from 'react';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from 'react';
import LogIn from './components/logIn';
import SingUp from './components/signUp';
import Main from './components/Main';
import Dashboard from './components/dashboard';
import Entrance from './components/Admin/Entrance';
import About from './components/SideElems/about';
import { useState } from 'react';
function App() {
  var [t,p]=useState('true');
  return (
    <>
    <div>
    <Layout/>
      <BrowserRouter>
      <Routes path='/' >
        <Route path='/' element={<Main/>}/>
        <Route path='sign'  element={<SingUp></SingUp>}/>
        <Route path='login'  element={<LogIn/>}/>
        <Route path='dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='admin' element={<Entrance></Entrance>}/>
        <Route path='about' element={<About></About>}/> 
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
