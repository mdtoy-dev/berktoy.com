import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const Navbar = () => {
  return (
    <nav>
      <div className={styles.profile}>
        <Link to="/">
          <h1>berktoy</h1>
          <p>
            ex-medical doctor<br></br> fell in love with coding
          </p>
        </Link>
      </div>
      <ul className={styles.navbar}>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
