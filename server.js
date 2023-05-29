import "dotenv/config";
import _initializePassport from "./src/passport/passport.js";
import app from "./src/app.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port 3000");
});
