import jwt from "jsonwebtoken";
export const generateTokens = async (req, res, next) => {
  try {
    const { _id, email, role } = req.user;
    const accessToken = jwt.sign(
      { _id, email, role },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: "1d",
      }
    );
    const refreshToken = jwt.sign(
      { _id, email, role },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};
