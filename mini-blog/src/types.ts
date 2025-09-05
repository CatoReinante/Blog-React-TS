export interface Post {
  id: number;
  content: string;
  author: string;
  userId?: number;
  createdAt: string | Date;
}

export interface User {
  id: number;
  name?: string;
  username?: string;
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
