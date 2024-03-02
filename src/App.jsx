import "./App.css"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects/"
import Contact from "./components/Contact/Contact"
import Blog from "./components/Blog/Blog"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
