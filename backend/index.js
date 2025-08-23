require("dotenv").config();
require("./config/googleoauth");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const connection = require("./config/database");
const foodRouter = require("./routes/food");
const breakfastRouter = require("./routes/breakfast");
const lunchRouter = require("./routes/lunch");
const dinnerRouter = require("./routes/dinner");
const snackRouter = require("./routes/snack");
const authenticationRouter = require("./routes/authentication");
const app = express();

app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<a href='/auth/google'>Login with Google</a>");
});

app.get(
    "/auth/google", passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/auth/google/failure",
    }),
    // (req, res) => {
    //     res.redirect("/profile");
    // }
);

app.get("/profile", (req, res) => {
    res.send(`Welcome ${req.user.displayName}`);
}); 

app.get("/auth/google/failure", (req, res) => {
    res.send("Login Failed");
});

app.get("/login/success", (req, res) => {
    if (req.user) {
            res.status(200).json({
            error: false,
            message: "Successfully Loged In",
            user: req.user,
        });
    } else {
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
});

app.get("/logout", (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.session.destroy();
        res.redirect(process.env.CLIENT_URL);
    });
});

app.use("/auth", authenticationRouter);
app.use("/foods", foodRouter);
app.use("/breakfast", breakfastRouter);
app.use("/lunch", lunchRouter);
app.use("/snack", snackRouter);
app.use("/dinner", dinnerRouter);

app.listen(5000, async () => {
    try {
        await connection;
        console.log("Successful Connection to MongoDB Atlas!");
    } catch (err) {
        console.log(err);
    }
    console.log("Server running at port 5000");
});