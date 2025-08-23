const {model, Schema} = require("mongoose");

const SnackMSchema = new Schema(
    {
        userId: {type: String, required: true},
        brand: {type: String},
        name: {type: String, required: true},
        servingSize: {type: String},
        servingsPer: {type: String},
        calories: {type: String, required: true},
        fat: {type: String},
        protein: {type: String},
        carbs: {type: String},
    }
)

const SnackM = model("snack", SnackMSchema);
module.exports = SnackM;