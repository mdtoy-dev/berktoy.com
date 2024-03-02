import { useState } from "react"
import blogData from "../../data/blogData.json"
import { Link } from "react-router-dom"
import styles from "./styles.module.css"

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  const handlePostClick = (postId) => {
    const post = blogData.find((post) => post.id === postId)
    setSelectedPost(post)
  }

  return (
    <main className={styles.blogContainer}>
      <div>
        {blogData.map((post) => (
          <div className={styles.blogPosts}>
              <Link key={post.id} to={`/blog/${post.id}`}>
                <h2 onClick={() => handlePostClick(post.id)}>{post.title}</h2>
              </Link>
              <p className={styles.author}>By {post.author}</p>
            </div>
        ))}
      </div>
    </main>
  )
}
export default Blog
