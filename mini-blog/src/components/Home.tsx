import { useState } from "react";
import NewPost from "./NewPost";
import type { Post, User } from "../types";

interface HomeProps {
  user: User | null;
}

const Home = ({ user }: HomeProps) => {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      content:
        "Hoy probé React con TypeScript y es un viaje 🚀. Los tipos te salvan de muchos bugs.",
      author: "María Lopez",
      createdAt: new Date("2025-09-02T10:00:00Z"),
    },
    {
      id: 2,
      content:
        "Arranqué con Node.js, me explotó la cabeza 🤯 con async/await pero después es magia pura.",
      author: "Juan Rodriguez",
      createdAt: new Date("2025-09-01T18:30:00Z"),
    },
    {
      id: 3,
      content:
        "Consejo random: hacé commits chicos y claros. Te vas a agradecer cuando tengas que debuggear 😅",
      author: "Lucía Rondon",
      createdAt: new Date("2025-08-31T14:15:00Z"),
    },
  ]);

  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <h1 className="mb-4 text-center">Mini Blog</h1>

      {user ? (
        <p className="text-success text-center">
          Bienvenido <strong>{user.name}</strong> 👋
        </p>
      ) : (
        <p className="text-center text-muted">
          Iniciá sesión para publicar tus propios posts.
        </p>
      )}

      <div className="d-flex flex-column gap-3 mt-4">
        {posts.map((post) => (
          <div key={post.id} className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">{post.author}</span>
                <small className="text-muted">
                  {new Date(post.createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </small>
              </div>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
