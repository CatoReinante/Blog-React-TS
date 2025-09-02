import { useState } from "react";
import { type NewPostData } from "../assets/types";

const NewPost = () => {
  const [form, setForm] = useState<NewPostData>({
    content: "",
    author: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };

  return (
    <div>
      <h1>Crear un nuevo post</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: "12px", maxWidth: "600px" }}
      >
        <div>
          <textarea
            className=""
            id="content"
            name="content"
            required
            value={form.content}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
