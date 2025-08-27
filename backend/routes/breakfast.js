const {Router} = require("express");
const breakfastRouter = Router();

const BreakfastM = require("../models/BreakfastM");

breakfastRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const {userId} = request.body;
        const breakfast = new BreakfastM(...data, userId);
        await breakfast.save();
        return result.status(200).send({message: "Breakfast Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

breakfastRouter.get("/", async (request, result) => {
    try {
        const {userId} = request.body;
        const breakfasts = await BreakfastM.find({userId});
        return result.status(200).send(breakfasts)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

breakfastRouter.patch("/:breakfastId", async (request, result) => {
    try {
        const {breakfastId} = request.params;
        const body = request.body
        const {userId} = request.body;
        await BreakfastM.deleteOne({_id: breakfastId, userId: userId}, {$set: body})
        return result.status(200).send({message: "Breakfast Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

breakfastRouter.patch("/:breakfastId", async (request, result) => {
    try {
        const {breakfastId} = request.params;
        const {userId} = request.body;
        await BreakfastM.deleteOne({_id: breakfastId, userId: userId})
        return result.status(200).send({message: "Breakfast Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = breakfastRouter;