import express from "express";
import confluenceRoutes from "./routes.js";

const app = express();

app.use(express.json());

app.use("/confluence", confluenceRoutes);

export default app;
