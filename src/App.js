import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Calculator from "./pages/Calculator";
import ImageUpload from "./pages/ImageUpload";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/imageupload" element={<ImageUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
