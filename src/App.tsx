import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from './Components/Main';
import Signup from './Auth/Signup';
import Login from './Auth/Login'
import AllProperties from './Pages/AllProperties';
import Property from './Pages/Property';
import {PropertyAttribute} from './Components/PropertyForm'
//import  from './Services/api'
import apiCalls from './Services/api'

//for the props
//const properties:PropertyAttribute[] = []


function App() {

  const[property, setProperties] = useState<PropertyAttribute[]>([] as PropertyAttribute[])

  const loadProperties = async () => {
    const property =  await apiCalls.getAllProperties();
   
    //error
  //  console.log(property)
  //  if(property){
  //     setProperties(property)
  //  }else{
  //    setProperties(property)
  //  }
    //setProperties([...property])
     //setProperties(property)

  }

  useEffect(() => {
    loadProperties()
  }, [])

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/allproperties' element={<AllProperties items = {property}/>}></Route>
        <Route path='/property' element={<Property/>}></Route>
      </Routes>
     
      {/* <Navbar/> */}
    </>
  );
}

export default App;
