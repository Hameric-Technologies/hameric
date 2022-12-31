import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Homepage from './Pages/Home';
import Contact from './Pages/Home/Contact';

const APP = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default APP