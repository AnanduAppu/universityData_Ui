import { useState } from 'react'

import PostInfo from './pages/PostInfo'
import Table from './pages/Table'
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>

    <Routes>

    <Route path="/" element={<PostInfo />} />
    <Route path="/table" element={<Table />} />
    </Routes>
  
    </>
  )
}

export default App
