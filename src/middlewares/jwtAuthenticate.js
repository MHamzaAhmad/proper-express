import passport from "passport";
import _ from "lodash";

export function jwtAuthenticate(req, res, next) {
  passport.authenticate("jwt", { session: false }, function (err, user, info) {
    if (err || !user || _.isEmpty(user)) {
      return next(info);
    } else {
      return next();
    }
  })(req, res, next);
}
