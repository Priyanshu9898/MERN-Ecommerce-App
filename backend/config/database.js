const mongoose = require('mongoose');
const db = process.env.DATABASE;

console.log(db);

exports.connectDatabase = () => {
    mongoose
      .connect(db, { useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB database connection established successfully");
      })
      .catch(() => {
        console.log("Error connecting to MongoDB database");
      });
  };