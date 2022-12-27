import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Homepage from './Pages/Home';

const APP = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default APP