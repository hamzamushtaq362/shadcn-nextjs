import api from "../lib/axios";

export const getTodos = () => {
  return api.get("/todos/101");
};

// Function to create a new post
export const createPost = (data) => {
  return api.post("/posts", data);
};
