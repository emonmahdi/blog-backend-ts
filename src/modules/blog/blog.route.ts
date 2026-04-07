import express, { Router } from "express";
import { BlogController } from "./blog.controller.js";

const router = express.Router();

router.post("/create-blog", BlogController.createBlog);
router.get("/", BlogController.getAllBlogs);
// ✅ Get Single Blog
router.get("/:id", BlogController.getSingleBlog);

// ✅ Update Blog
router.patch("/:id", BlogController.updateBlog);

// ✅ Delete Blog
router.delete("/:id", BlogController.deleteBlog);

export const BlogRoutes = router;
