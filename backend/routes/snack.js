const {Router} = require("express");
const snackRouter = Router();

const SnackM = require("../models/SnackM");

snackRouter.post("/create", async (request, result) => {
    try {
        const data = request.body;
        const {userId} = request.body;
        const snack = new SnackM(...data, userId);
        await snack.save();
        return result.status(200).send({message: "Snack Item Saved to Database!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

snackRouter.get("/", async (request, result) => {
    try {
        const {userId} = request.body;
        const snacks = await SnackM.find({userId});
        return result.status(200).send(snacks)
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

snackRouter.patch("/:snackId", async (request, result) => {
    try {
        const {snackId} = request.params;
        const body = request.body
        const {userId} = request.body;
        await SnackM.deleteOne({_id: snackId, userId: userId}, {$set: body})
        return result.status(200).send({message: "Snack Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

snackRouter.patch("/:idSnack", async (request, result) => {
    try {
        const {idSnack} = request.params;
        const {userId} = request.body;
        await SnackM.deleteOne({_id: idSnack, userId: userId})
        return result.status(200).send({message: "Snack Updated!"});
    } catch (err) {
        return result.status(400).send({message: err});
    }
});

module.exports = snackRouter;