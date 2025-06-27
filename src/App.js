import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Projects from "../src/components/Projects";
import Contact from "./components/Contact";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
);

export default App;
