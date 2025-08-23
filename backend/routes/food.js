const {Router} = require("express");
const foodsRouter = Router();

const FoodM = require("../models/FoodM");

foodsRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        await FoodM.insertMany(data);
        return result.status(200).send({message: "Food Items Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

foodsRouter.get("/", async (request, result) => {
    try {
        const query = request.query;
        const foods = await FoodM.find({"name": { $regex: query, $options: "i"}});
        result.status(200).send(foods);
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = foodsRouter;