import Post from "../models/post.js";
import User from "../models/user.js";

export const index = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ author: userId }).populate("author");
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};
export const create = async (req, res, next) => {
  try {
    console.log(req.params);
    const userId = req.params.userId;
    const post = await Post.create({ ...req.body, author: userId });
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};
export const update = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
export const deletePost = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    const user = User.findByIdAndUpdate(userId, {
      $pull: { posts: post._id },
    });

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
