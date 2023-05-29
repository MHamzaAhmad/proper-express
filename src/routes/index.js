import UserRouter from "./user.js";
import PostRouter from "./post.js";
import AuthRouter from "./auth.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("You are quering the api");
});
router.use("/users", UserRouter);
router.use("/:userId/posts", PostRouter);
router.use("/auth", AuthRouter);

export default router;
