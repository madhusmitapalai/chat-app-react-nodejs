import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Resister from "./Pages/Resister";
import Chat from "./Pages/Chat";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/resister" element={<Resister />} />
          <Route path="/login" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
