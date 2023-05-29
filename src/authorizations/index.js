import _ from "lodash";
export const isAdmin = (req, res, next) => {
  try {
    const { role } = req.user;
    if (!_.isEmpty(role) && role === "admin") {
      next();
    }
    res
      .status(200)
      .send({ msg: "You are not authorized to perform this action" });
  } catch (error) {
    next(error);
  }
};
