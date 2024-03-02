import React, { useState } from "react"
import styles from "./styles.module.css"

const Project = ({ title, deployedLink, repoLink, image }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect() // Get bounding rect of the project container
    const offsetX = e.clientX - boundingRect.left // Normalize mouse X coordinate
    const offsetY = e.clientY - boundingRect.top // Normalize mouse Y coordinate
    setMousePosition({ x: offsetX, y: offsetY })
  }

  return (
    <div
      className={styles.project}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.wrapper}>
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
      </div>
      {isHovered && image && (
        <div
          className={styles.image}
          style={{
            position: "absolute",
            top: mousePosition.y - 80,
            left: mousePosition.x - 200,
          }}
        >
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  )
}

export default Project
