const mongoose = require("mongoose");

//Creating function for connecting the databse

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      //this does not work in latest mongoose setup
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
