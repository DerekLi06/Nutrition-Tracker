require("dotenv").config();
const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.MONGODB_DATABASE_URL);

module.export = connections;