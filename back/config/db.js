// import mongoose from "mongoose";
const mongoose = require("mongoose");

const dbConnection = async () =>{

    const conn = await mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser : true,
    useUnifiedTopology : true,
    
});

    console.log(`MongoDb Connected : ${conn.connection.host}`.cyan.underline.bold);

    
};

module.exports = dbConnection;
// export default dbConnection;


