import morgan from "morgan";
import express from "express";

import { connectDB } from "./db/connection.js";
import MainRouter from "./routes/index.js";
import handleError from "./middlewares/errorHandler.js";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

connectDB();

app.use("/api", MainRouter);

app.use(handleError);

export default app;
