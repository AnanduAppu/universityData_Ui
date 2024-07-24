
import PostInfo from './pages/PostInfo'
import Table from './pages/Table'
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

function App() {

  //axios.defaults.baseURL="https://backend-unversitydata.onrender.com/";
  axios.defaults.baseURL = "http://localhost:3211/";

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
