import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import NewPost from "./components/NewPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-post" element={<NewPost />} />
    </Routes>
  );
}

export default App;
