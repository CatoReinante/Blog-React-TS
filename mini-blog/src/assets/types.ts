export interface Post {
  id: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  author: string;
  createdAt: Date;
}

export type NewPostData = Omit<Post, "id" | "createdAt">;
