export interface Post {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  id: number;
  postId: number;
  content: string;
  author: string;
  createdAt: Date;
}

export type NewPostData = Omit<Post, "id" | "createdAt">;
