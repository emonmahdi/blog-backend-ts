import mongoose, { Schema } from "mongoose";
import type { IBlog } from "./blog.interface.js";

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    isPublished: { type: String, default: false }
  },
  { timestamps: true }
);

const Blog = mongoose.model<IBlog>("Blog", blogSchema);
export default Blog;
