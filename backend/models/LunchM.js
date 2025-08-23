const {model, Schema} = require("mongoose");

const LunchMSchema = new Schema(
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

const LunchM = model("lunch", LunchMSchema);
module.exports = LunchM;