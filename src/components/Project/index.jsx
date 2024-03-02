import React from "react"
import styles from "./styles.module.css"

const Project = ({ title, deployedLink, repoLink, image }) => {
  return (
    <div className={styles.project}>
      <h3 className={styles.name}>{title}</h3>
      <p>
        {deployedLink && (
          <a href={deployedLink} target="_blank">
            Link
          </a>
        )}
      </p>
      <p>
        <a href={repoLink} target="_blank">
          Repo
        </a>
      </p>
      <div className={styles.image}>
        {image && <img src={image} alt={title} />}
      </div>
    </div>
  )
}

export default Project
