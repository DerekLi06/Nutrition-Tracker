require("dotenv").config();

const {Router} = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticationRouter = Router();
const UserM = require("../models/UserM");

authenticationRouter.post("/register", async (req, res) => {
    const data = req.body;
    console.log("Register data:", data);
    const curUser = await UserM.findOne({email: data.email});
    if (curUser) {return res.status(400).send({message: "This User Already Exists!"});}
    
    bcrypt.hash(data.password, 8, async function(err, hash) {
        if (err) {return res.status(400).send({message: "Error Message 400: A Problem Has Occured"});}
        const newU = new UserM({...data, password: hash});
        await newU.save()
        return res.status(200).send({message: "New User Registered!"});
    });
});

authenticationRouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const curUser = await UserM.findOne({email});
    if (!curUser) {return res.status(400).send({message: "This User Doesn't Exist!"})}
    bcrypt.compare(password, curUser.password, function(err, valid) {
        if (err) {return res.status(400).send({message: "Error Message 400: A Problem Has Occured"});}
        if (!valid) {return res.status(400).send({message: "Invalid Username or Password! Try Again!"});}
        const token = jwt.sign({
            userId: curUser._id
        }, process.env.JWT_SECRET, {expiresIn: "24h"});
        return res.status(200).send({message: "User Successfully Logged In!", token});
    });
});

module.exports = authenticationRouter;
    