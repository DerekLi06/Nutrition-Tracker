const {Router} = require("express");
const dinnerRouter = Router();

const DinnerM = require("../models/DinnerM");

dinnerRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const dinner = new BreakfastM(data);
        await dinner.save();
        return result.status(200).send({message: "Dinner Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

dinnerRouter.get("/", async (request, result) => {
    try {
        const dinners = await DinnerM.find();
        return result.status(200).send(dinners)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

dinnerRouter.patch("/:idDinner", async (request, result) => {
    try {
        const {idDinner} = request.params;
        const body = request.body
        await DinnerM.deleteOne({ _id: idDinner}, {$set: body})
        return result.status(200).send({message: "Dinner Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

dinnerRouter.patch("/:idDinner", async (request, result) => {
    try {
        const {idDinner} = request.params;
        await DinnerM.deleteOne({ _id: idDinner})
        return result.status(200).send({message: "Dinner Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = dinnerRouter;