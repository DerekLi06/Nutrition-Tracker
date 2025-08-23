const {model, Schema} = require("mongoose");

const DinnerMSchema = new Schema(
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

const DinnerM = model("dinner", DinnerMSchema);
module.exports = DinnerM;