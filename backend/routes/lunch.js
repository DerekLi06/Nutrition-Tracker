const {Router} = require("express");
const lunchRouter = Router();

const LunchM = require("../models/LunchM");

lunchRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const {userId} = request.body;
        const lunch = new LunchM(...data, userId);
        await lunch.save();
        return result.status(200).send({message: "Lunch Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

lunchRouter.get("/", async (request, result) => {
    try {
        const {userId} = request.body;
        const lunches = await LunchM.find({userId});
        return result.status(200).send(lunches)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

lunchRouter.patch("/:lunchId", async (request, result) => {
    try {
        const {lunchId} = request.params;
        const body = request.body
        const {userId} = request.body;
        await LunchM.deleteOne({_id: lunchId, userId: userId}, {$set: body})
        return result.status(200).send({message: "Lunch Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

lunchRouter.patch("/:lunchId", async (request, result) => {
    try {
        const {lunchId} = request.params;
        const {userId} = request.body;
        await LunchM.deleteOne({_id: lunchId, userId: userId})
        return result.status(200).send({message: "Lunch Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = lunchRouter;