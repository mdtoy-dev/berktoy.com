import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects/"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import BlogPost from "./components/BlogPost"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
