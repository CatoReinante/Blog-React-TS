import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import Login from "./components/Login";
import { useState } from "react";
import type { User } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState<User | null>(null);
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header user={user} onLogout={() => setUser(null)} />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/new-post" element={<NewPost user={user} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
