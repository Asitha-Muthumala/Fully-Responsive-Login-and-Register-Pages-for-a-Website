import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebLogin from './pages/login';
import WebRegister from './pages/register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<WebLogin />} />
          <Route path="/register" element={<WebRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
