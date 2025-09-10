require("dotenv").config();
const mongoose = require("mongoose");
const connections = mongoose.connect(process.env.MONGODB_DATABASE_URL);

module.export = connections;