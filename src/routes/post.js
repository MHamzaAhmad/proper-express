import express from "express";
import {
  index,
  create,
  update,
  deletePost,
} from "../controllers/postController.js";
import { jwtAuthenticate } from "../middlewares/jwtAuthenticate.js";

const postRouter = express.Router({ mergeParams: true });

postRouter.route("/").get(jwtAuthenticate, index).post(jwtAuthenticate, create);

postRouter
  .route("/")
  .patch(jwtAuthenticate, update)
  .delete(jwtAuthenticate, deletePost);

export default postRouter;
