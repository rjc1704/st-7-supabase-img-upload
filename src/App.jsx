import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <h1>이미지 포함된 포스트 작성</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
