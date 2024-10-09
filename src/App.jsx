import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import Cause from "./pages/causes/Cause";
import CausesSingle from "./pages/causes/CauseSingle";
import About from "./pages/about/About";
import Blog from "./pages/blogs/Blog";
import Contact from "./pages/contact/Contact";
import Donate from "./pages/donate/Donate";
import Footer from "./components/Footer";
import BlogSingle from "./pages/blogs/BlogSingle";
import VolunteerPage from "./components/VolunteerPage";


function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/causes" element={<Cause />} />
        <Route path="/causes-single" element={<CausesSingle />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
