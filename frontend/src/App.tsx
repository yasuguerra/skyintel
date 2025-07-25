import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "@/pages/Overview";
import OpsSales from "@/pages/OpsSales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/ops" element={<OpsSales />} />
      </Routes>
    </BrowserRouter>
  );
}


