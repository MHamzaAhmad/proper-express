import User from "../models/user.js";

export const index = async (req, res, next) => {
  try {
    const users = await User.find({}).populate("posts");
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).populate("posts");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const create = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    delete user._doc.password;
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
export const update = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
