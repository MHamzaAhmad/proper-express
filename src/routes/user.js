import express from "express";
import {
  deleteUser,
  index,
  create,
  update,
  getUser,
} from "../controllers/userController.js";
import { hashPassword, verifyPassword } from "../middlewares/userAuth.js";
import { Validator } from "express-json-validator-middleware";
import userSchema from "../validators/user.js";
import { jwtAuthenticate } from "../middlewares/jwtAuthenticate.js";
import { isAdmin } from "../authorizations/index.js";
const userRouter = express.Router();

const { validate } = new Validator();

userRouter
  .route("/")
  .get(index)
  .post(validate({ body: userSchema }), hashPassword, create);

userRouter.use(jwtAuthenticate);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(validate({ body: userSchema }), isAdmin, hashPassword, update)
  .delete(isAdmin, deleteUser);

export default userRouter;
