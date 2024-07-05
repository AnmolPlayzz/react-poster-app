import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";
function Posts() {
  return (
      <main>
        <Outlet />
        <PostList />
      </main>
  )
}

export default Posts;
export async function loader() {
  const response = await fetch("https://polybotapi.ddns.net/posts")
  const postData = await response.json()
  return postData.posts
}
 