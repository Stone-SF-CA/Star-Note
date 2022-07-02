import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Components/Homepage.jsx'
import Login from './Components/Login.jsx'


const App = () => {
  let au = window.localStorage.getItem('isAuth') == 'true' ? true : false
  const [isAuth, setIsAuth] = useState(au);
  console.log(window.localStorage.getItem('isAuth'))
  console.log(isAuth)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage setIsAuth={setIsAuth} isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;