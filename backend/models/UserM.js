const {model, Schema} = require("mongoose");

const UserMSchema = new Schema(
    {
        username: {type: String},
        email: {type: String, unique: true},    
        password: {type: String},
        gender: {type: String},
        age: {type: String},
        height: {type: String},
        weight: {type: String},
        activityLevel: {type: String},
        country: {type: String},
        zipcode: {type: String},
        weightGoal: {type: String},
        maintenceCalories: {type: String}
    }
)

const UserM = model("user", UserMSchema);
module.exports = UserM;