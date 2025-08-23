const {model, Schema} = require("mongoose");

const BreakfastMSchema = new Schema(
    {
        userId: {type: String, required: true},
        brand: {type: String},
        name: {type: String, required: true},
        servingSize: {type: String},
        servingsPer: {type: String},
        calories: {type: String, required: true},
        fat: {type: String},
        protein: {type, String},
        carbs: {type, String},
    }
)

const BreakfastM = model("breakfast", BreakfastMSchema);
module.exports = BreakfastM;