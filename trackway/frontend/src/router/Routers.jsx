import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom';
import Home from '../pages/Home'; 
import Register from '../pages/Register';
import Login from '../pages/Login';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import SearchResultList from '../pages/SearchResultList';
import Thankyou from '../pages/Thankyou';

const Routers = () => {
  return (
   <Routes>

   <Route path='/' element={<Navigate to ='/home'/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/Register'element={<Register/>}/>
   <Route path='/Login'element={<Login/>}/>
   <Route path='/tours'element={<Tours/>}/>
   <Route path='/Thank-you'element={<Thankyou/>}/>
   <Route path='/tours/:id'element={<TourDetails/>}/>
   <Route path='/tours/search'element={<SearchResultList/>}/>

   </Routes>
  )
}

export default Routers