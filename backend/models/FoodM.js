const {model, Schema} = require("mongoose");

const FoodMSchema = new Schema(
    {
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

const FoodM = model("food", FoodMSchema);
module.exports = FoodM;