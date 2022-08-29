import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from './Components/Main';
import Signup from './Auth/Signup';
import Login from './Auth/Login'
import AllProperties from './Pages/AllProperties';
import Property from './Pages/Property';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/allproperties' element={<AllProperties/>}></Route>
        <Route path='/property' element={<Property/>}></Route>
      </Routes>
     
      {/* <Navbar/> */}
    </>
  );
}

export default App;
