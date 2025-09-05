import { useState, useEffect } from "react";
import type { Post, User } from "../types";
import { getPostsApi } from "../hooks/Api";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/storeConfig";

interface HomeProps {
  user: User | null;
}

const Home = ({ user }: HomeProps) => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsApi();
      } catch (err: any) {
        setError(err.message || "Error al cargar posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      <h1 className="mb-4 text-center">Mini Blog</h1>

      {user ? (
        <p className="text-success text-center">
          Bienvenido <strong>{user.username || user.email}</strong> 👋
        </p>
      ) : (
        <p className="text-center text-muted">
          Iniciá sesión para publicar tus propios posts.
        </p>
      )}

      {loading && <p className="text-center">Cargando posts...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="d-flex flex-column gap-3 mt-4">
        {posts.map((post) => (
          <div key={post.id} className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">{post.author || "Anónimo"}</span>
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
