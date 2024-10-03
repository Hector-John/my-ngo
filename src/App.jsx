import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cause from "./pages/causes/Cause";
import About from "./pages/about/About";
import Blog from "./pages/blogs/Blog";
import Contact from "./pages/contact/Contact";
import Donate from "./pages/donate/Donate";
import Footer from "./components/Footer";
 
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/causes" element={<Cause />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
