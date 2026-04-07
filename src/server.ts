import mongoose from "mongoose";
import config from "./config/index.js";
import app from "./app.js";

async function main() {
  await mongoose.connect(config.database_url);
  console.log("Database Connected");

  app.get("/", (req, res) => {
    res.send("Blog Application Server Running....");
  });

  app.listen(config.port, () => {
    console.log(`Server running on Port ${config.port}`);
  });
}

await main();
