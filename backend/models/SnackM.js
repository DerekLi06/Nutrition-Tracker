const {model, Schema} = require("mongoose");

const SnackMSchema = new Schema(
    {
        userId: {type: String},
        brand: {type: String},
        name: {type: String},
        servingSize: {type: String},
        servingsPer: {type: String},
        calories: {type: String},
        fat: {type: String},
        protein: {type: String},
        carbs: {type: String},
    }
)

const SnackM = model("snack", SnackMSchema);
module.exports = SnackM;