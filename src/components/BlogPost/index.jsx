import { useParams } from "react-router-dom"
import blogData from "../../data/blogData.json"

const BlogPost = () => {
  const { postId } = useParams()
  const post = blogData.find((post) => post.id === parseInt(postId))

  if (!post) {
    return <div>Post not found</div>
  }

  const formatContent = (content) => {
    return { __html: content.replace(/\n/g, "<br>") }
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>
        By {post.author}, {post.date}
      </p>
      <p dangerouslySetInnerHTML={formatContent(post.content)}></p>
    </article>
  )
}

export default BlogPost
