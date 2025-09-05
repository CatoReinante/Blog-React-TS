import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
});

// --- AUTH ---
export async function loginUser(username: string, password: string) {
  const response = await API.post("/auth/login", { username, password });
  return response.data;
}

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  const response = await API.post("/auth/register", {
    username,
    email,
    password,
  });
  return response.data;
}

export async function logoutUser() {
  localStorage.removeItem("token");
}

// --- POSTS ---
export async function getPostsApi() {
  const response = await API.get("/posts");
  return response.data;
}

export async function getOnePost(postId: string) {
  const response = await API.get(`/posts/${postId}`);
  return response.data;
}

export async function createPostApi(content: string) {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No autorizado");

  const userId = JSON.parse(localStorage.getItem("user") || "{}").id;
  if (!userId) throw new Error("No autorizado");
  const response = await API.post(
    "/posts",
    { content, userId },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
}
