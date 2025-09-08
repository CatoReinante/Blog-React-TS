import { useState, useEffect } from "react";
import type { Post, User } from "../types";
import { getPostsApi } from "../hooks/Api";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/storeConfig";
import { setPosts } from "../redux/postSlice";
import NewPost from "./NewPost";

interface HomeProps {
  user: User | null;
}

const Home = ({ user }: HomeProps) => {
  const posts = useSelector((state: RootState) => state.post.posts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsApi();
        dispatch(setPosts(data)); // <-- Aquí guardas los posts en Redux
      } catch (err: any) {
        setError(err.message || "Error al cargar posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Mini Blog</h1>

      {user ? (
        <>
          <p className="text-success text-center">
            Bienvenido <strong>{user.username || user.email}</strong> 👋
          </p>
          <div className="mb-4">
            <NewPost user={user} />
          </div>
        </>
      ) : (
        <p className="text-center text-muted">
          Iniciá sesión para publicar tus propios posts.
        </p>
      )}

      {loading && <p className="text-center">Cargando posts...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row gap-3 justify-content-center">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card shadow col-3 p-3"
            style={{
              minHeight: "150px",
              width: "300px",
            }}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <p className="mb-4">
                  {typeof post.author === "string"
                    ? post.author
                    : post.author?.username ||
                      post.author?.name ||
                      post.author?.email ||
                      ""}
                </p>

                <small className="text-muted">
                  {new Date(post.createdAt).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </small>
              </div>
              <p className="card-text text-center">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
