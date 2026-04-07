/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { Request, Response } from "express";
import httpStatus from "http-status";
import { BlogService } from "./blog.service.js";
import sendResponse from "../../utils/sendResponse.js";

const createBlog = async (req: Request, res: Response) => {
  const result = await BlogService.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result
  });
};

const getAllBlogs = async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result
  });
};

// ✅ Get Single Blog
const getSingleBlog = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BlogService.getSingleBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrieved successfully",
    data: result
  });
};

// ✅ Update Blog
const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BlogService.updateBlog(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result
  });
};

// ✅ Delete Blog
const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result
  });
};

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog
};
