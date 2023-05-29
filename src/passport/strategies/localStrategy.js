import LocalStrategy from "passport-local";
import User from "../../models/user.js";

const Strategy = LocalStrategy.Strategy;

const localStrategy = new Strategy(
  {
    usernameField: "email",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email }).select("+password");
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const isValid = await user.validatePassword(password);
      if (!isValid) {
        return done(null, false, { message: "Invalid Password" });
      }
      return done(null, user, { message: "Logged in Successfully" });
    } catch (error) {
      return done(error, false);
    }
  }
);

export default localStrategy;
