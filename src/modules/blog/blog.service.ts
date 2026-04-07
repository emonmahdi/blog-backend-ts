/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import type { IBlog } from "./blog.interface.js";
import Blog from "./blog.model.js";

const createBlog = async (payload: IBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogs = async () => {
  return await Blog.find();
};

const getSingleBlog = async (id: string) => {
  return await Blog.findById(id);
};

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  return await Blog.findByIdAndUpdate(id, payload, { new: true });
};

const deleteBlog = async (id: string) => {
  return await Blog.findByIdAndDelete(id);
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
};
