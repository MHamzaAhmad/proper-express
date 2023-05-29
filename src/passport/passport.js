import passport from "passport";
import localStrategy from "./strategies/localStrategy.js";
import jwtStrategy from "./strategies/jwtStrategy.js";

passport.use("login", localStrategy);
passport.use(jwtStrategy);

export default passport;
