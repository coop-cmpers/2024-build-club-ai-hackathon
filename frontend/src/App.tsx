import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
