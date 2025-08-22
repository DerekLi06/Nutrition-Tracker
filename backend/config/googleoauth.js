require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy();
const UserM = require("../models/UserM");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/google/callback",
            scope: ["profile", "email"],
            toCallBack: true,
        },
        async function (accessToken, refreshToken, profile, done) {
            const user = await UserM.findOne({email: profile.email});
            if (!user) {
                const newU = UserM( 
                    {
                        username: profile.displayName,
                        email: profile.email,
                    }
                );
                await newU.save()
            }
            return done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));