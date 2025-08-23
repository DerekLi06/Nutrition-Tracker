const {Router} = require("express");
const breakfastRouter = Router();

const BreakfastM = require("../models/BreakfastM");

breakfastRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const breakfast = new BreakfastM(data);
        await breakfast.save();
        return result.status(200).send({message: "Breakfast Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

breakfastRouter.get("/", async (request, result) => {
    try {
        const breakfasts = await BreakfastM.find();
        return result.status(200).send(breakfasts)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

breakfastRouter.patch("/:idBreakfast", async (request, result) => {
    try {
        const {idBreakfast} = request.params;
        const body = request.body
        await BreakfastM.deleteOne({ _id: idBreakfast}, {$set: body})
        return result.status(200).send({message: "Breakfast Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

breakfastRouter.patch("/:idBreakfast", async (request, result) => {
    try {
        const {idBreakfast} = request.params;
        await BreakfastM.deleteOne({ _id: idBreakfast})
        return result.status(200).send({message: "Breakfast Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = breakfastRouter;