require("dotenv").config();
require("./config/googleoauth");

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.get("/", (req, res) => {
  res.send("<a href='/auth/google'>Login with Google</a>");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/profile", (req, res) => {
  res.send(`Welcome ${req.user.displayName}`);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});