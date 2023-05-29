import bcrypt from "bcryptjs";
import User from "../models/user.js";

const hashPassword = async (req, res, next) => {
  const password = req.body.password;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
  }
  next();
};

const verifyPassword = async (req, res, next) => {
  const password = req.body.password;
  const user = User.find({ email: req.body.email }).select("+password");
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const isValid = await user.validatePassword(password);
  if (!isValid) {
    return res.status(401).json({ error: "Invalid Password" });
  }
  next();
};

export { hashPassword, verifyPassword };
