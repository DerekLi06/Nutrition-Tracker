const {Router} = require("express");
const snackRouter = Router();

const SnackM = require("../models/SnackM");

snackRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const snack = new SnackM(data);
        await snack.save();
        return result.status(200).send({message: "Snack Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

snackRouter.get("/", async (request, result) => {
    try {
        const snacks = await SnackM.find();
        return result.status(200).send(snacks)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

snackRouter.patch("/:idSnack", async (request, result) => {
    try {
        const {idSnack} = request.params;
        const body = request.body
        await SnackM.deleteOne({ _id: idSnack}, {$set: body})
        return result.status(200).send({message: "Snack Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

snackRouter.patch("/:idSnack", async (request, result) => {
    try {
        const {idSnack} = request.params;
        await SnackM.deleteOne({ _id: idSnack})
        return result.status(200).send({message: "Snack Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = snackRouter;