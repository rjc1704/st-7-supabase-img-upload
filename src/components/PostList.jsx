import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../api/posts";
import { setPosts } from "../redux/slices/postSlice";
import PostItem from "./PostItem";

export default function PostList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts()
      .then((posts) => dispatch(setPosts(posts)))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <ul style={{ border: "1px solid red", padding: 12 }}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
