import { useState } from "react";
import { type NewPostData, type User } from "../types";

interface NewPostProps {
  user: User | null;
}

const NewPost = ({ user }: NewPostProps) => {
  const [form, setForm] = useState<Omit<NewPostData, "author">>({
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      alert("Debes iniciar sesión para publicar un post.");
      return;
    }

    const newPost: NewPostData = {
      ...form,
      author: user.name, // 👈 autor tomado del usuario logueado
    };

    console.log("Nuevo post enviado:", newPost);

    // Resetea formulario
    setForm({ content: "" });
  };

  return (
    <div className="container d-flex justify-content-center align-items-start mt-5">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "600px" }}>
        <h2 className="mb-3">Crear un nuevo post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              id="content"
              name="content"
              placeholder="¿Qué estás pensando?..."
              className="form-control"
              rows={5}
              required
              value={form.content}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
