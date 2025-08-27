const {Router} = require("express");
const dinnerRouter = Router();

const DinnerM = require("../models/DinnerM");

dinnerRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const {userId} = request.body;
        const dinner = new DinnerM(...data, userId);
        await dinner.save();
        return result.status(200).send({message: "Dinner Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

dinnerRouter.get("/", async (request, result) => {
    try {
        const {userId} = request.body;
        const dinners = await DinnerM.find({userId});
        return result.status(200).send(dinners)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

dinnerRouter.patch("/:dinnerId", async (request, result) => {
    try {
        const {dinnerId} = request.params;
        const body = request.body
        const {userId} = request.body;
        await DinnerM.deleteOne({_id: dinnerId, userId: userId}, {$set: body})
        return result.status(200).send({message: "Dinner Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

dinnerRouter.patch("/:dinnerId", async (request, result) => {
    try {
        const {dinnerId} = request.params;
        const {userId} = request.body;
        await DinnerM.deleteOne({_id: dinnerId, userId: userId})
        return result.status(200).send({message: "Dinner Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = dinnerRouter;