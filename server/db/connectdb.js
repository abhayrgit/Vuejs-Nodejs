const mongoose = require('mongoose');

const connectDB = async(DATABASE_URL) =>{
    try{
        const DB_OPTIONS = {
            dbName: "restaurant",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Succesfully to mongoose");
    }catch(err){
        console.log(err);
    }
};


module.exports=connectDB;