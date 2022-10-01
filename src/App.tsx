import React, { Children, useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from './Components/Main';
import Signup from './Auth/Signup';
import Login from './Auth/Login'
import AllProperties from './Pages/AllProperties';
import Property from './Pages/Property';
import {PropertyAttribute} from './Components/PropertyForm'
//import  from './Services/api'
import apiCalls from './Services/api'
import axios from 'axios';



function App() {
  
  
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/allproperties' element={<AllProperties   />}></Route>
        <Route path='/property/:id' element={<Property/>}></Route>
      </Routes>
     
      
  

    </>
  );
}

export default App;
