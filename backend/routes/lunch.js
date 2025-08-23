const {Router} = require("express");
const lunchRouter = Router();

const lunchM = require("../models/LunchM");

lunchRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const lunch = new BreakfastM(data);
        await lunch.save();
        return result.status(200).send({message: "Lunch Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

lunchRouter.get("/", async (request, result) => {
    try {
        const lunches = await LunchM.find();
        return result.status(200).send(lunches)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

lunchRouter.patch("/:idLunch", async (request, result) => {
    try {
        const {idLunch} = request.params;
        const body = request.body
        await LunchfastM.deleteOne({ _id: idLunch}, {$set: body})
        return result.status(200).send({message: "Lunch Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

lunchRouter.patch("/:idLunch", async (request, result) => {
    try {
        const {idLunch} = request.params;
        await LunchfastM.deleteOne({ _id: idLunch})
        return result.status(200).send({message: "Lunch Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = lunchRouter;