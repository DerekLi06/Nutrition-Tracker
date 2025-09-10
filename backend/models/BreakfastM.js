const {model, Schema} = require("mongoose");

const BreakfastMSchema = new Schema(
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

const BreakfastM = model("breakfast", BreakfastMSchema);
module.exports = BreakfastM;