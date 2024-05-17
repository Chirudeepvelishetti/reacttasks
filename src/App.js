// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Productcomponent from './Products';
import Navbar from './Navbar1';
import Productsroute1 from './Products1r';
import Productsroute2 from './Products2r';
import { Routes,Route } from 'react-router-dom';
import PagenotFound from './PagenotFound';
import ProductDetails from './ProductDetails';
import Employees from './Employees';
import Sample from './Sample';
import Studentlist from './students/Studentlist';
import Users from './users/Users';

function App() {
  return (
   <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Productcomponent/>}></Route>
     <Route path="/productsroute1" element={<Productsroute1/>}></Route>
      <Route path="/productsroute2" element={<Productsroute2/>}></Route>
       <Route path="/product-details/:productId" element={<ProductDetails/>}></Route>
     <Route path='/employees' element={<Employees />}> </Route>
      <Route path='/sample' element={<Sample />}> </Route>
      <Route path='/student' element={<Studentlist />}> </Route>
      <Route path='/user' element={<Users />}> </Route>
     
        <Route path="*" element={<PagenotFound/>}></Route>

  </Routes>
  
   </div>
  );
}

export default App;
