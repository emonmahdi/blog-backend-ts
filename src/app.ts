import express from "express";
import cors from "cors";
import { BlogRoutes } from "./modules/blog/blog.route.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/blogs", BlogRoutes);

export default app;
