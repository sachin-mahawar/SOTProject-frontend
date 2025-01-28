import React from "react";
import "./App.css";
import { useState } from "react";
import AvailableTrains from "./pages/user/AvailableTrains";
import { Routes, Route } from "react-router-dom";
import SearchTrains from "./pages/user/SearchTrains";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PassangerDetail from "./pages/user/PassengerDetail";
import Payments from "./pages/user/Payments"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchTrains />} />
      <Route path="available-trains" element={<AvailableTrains />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="passenger-detail" element={<PassangerDetail />}></Route>
      <Route path="payments" element={<Payments />} />
    </Routes>
  );
}

export default App;
