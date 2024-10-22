import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../pages/home/Home.jsx"
import Feedback from "../pages/home/feedBack.jsx";


const RoutesCompo = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/feedback" element={<Feedback/>}/>
    
   
      </Routes>
    </>
  );
};

export default RoutesCompo;
