const {model, Schema} = require("mongoose");

const LunchMSchema = new Schema(
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

const LunchM = model("lunch", LunchMSchema);
module.exports = LunchM;