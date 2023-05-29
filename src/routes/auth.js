import express from "express";
import passport from "passport";

const authRouter = express.Router();

import { generateTokens } from "../services/tokenService.js";

authRouter
  .route("/login")
  .post(
    passport.authenticate("login", { session: false, failWithError: true }),
    generateTokens
  );

export default authRouter;
