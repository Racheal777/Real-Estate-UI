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
import { error } from 'console';


//for the props
const properties:PropertyAttribute[] = []


function App() {
  //const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);

  const [posts, setPosts]: [PropertyAttribute[], (posts: PropertyAttribute[]) => void] = React.useState(properties);
  //const[property, setProperties] = useState<PropertyAttribute[]>([])

  
 
  const loadProperties = async () => {
    //const properties =   await apiCalls.getAllProperties()
    const properties = await apiCalls.getAllProperties()
      
    //console.log(properties)
    //setPosts(properties)
    //setPosts({...posts,properties})
    //error
    //console.log('ppp',properties)
    //console.log(typeof(properties))
    //console.log('prop',property)
    //setProperties()
    //setProperties(property => [...property, properties])
    //property = properties
    //setProperties(...property, ...properties)
  

  }

  React.useEffect(() => {
    axios
    .get<PropertyAttribute[]>("http://localhost:7070/api/property/all-properties")
      .then(response => {
        setPosts(response.data);
        
        console.log(response.data)
      }).catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   loadProperties()
  // }, [])

  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/allproperties' element={<AllProperties posts ={posts}  />}></Route>
        <Route path='/property/:id' element={<Property/>}></Route>
      </Routes>
     
      
  

    </>
  );
}

export default App;
