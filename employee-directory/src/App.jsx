import "./index.css";


import HomePage from "./components/HomePage";

import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

export default function App() {
 

  return (
    
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/EmployeePage/:EmployeeName' element={<EmployeePage  />} />
      </Routes>
      
    </div>
  );
}

