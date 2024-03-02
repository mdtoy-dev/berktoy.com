import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"
import { CgMail } from "react-icons/cg"
import styles from "./styles.module.css"

const Contact = () => {
  return (
    <div>
      <div className={styles.contactDiv}>
        <p>
          Currently seeking<br></br>
          <span>front end developer </span> <br></br>roles to enhance my
          <br></br>
          <span>JavaScript and React</span>
          <br></br> skills
        </p>
        <ul className={styles.ulContact}>
          <li>berk.toy1@gmail.com</li>
          <li>+447541540173</li>
        </ul>
        <a href="src/assets/berktoy2024cv.pdf" download>
          Download Resume (PDF)
        </a>
      </div>
      <div className={styles.fa}>
        <a href="https://www.linkedin.com/in/berktoy/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mdtoy-dev" target="_blank">
          <FaGithub />
        </a>
        <a href="https://wa.me/447541540173" target="_blank">
          <FaWhatsapp />
        </a>
        <a href="mailto:berk.toy1@gmail.com">
          <CgMail />
        </a>
      </div>
    </div>
  )
}
export default Contact
