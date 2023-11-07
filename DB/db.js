
const cloudUrl ="mongodb+srv://nagilamukesh43:Handson123@cluster0.m0qsvtj.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require("mongoose")
mongoose.set("strictQuery", true)

const connectToDatabase= async() => {
    try{
        await mongoose.connect(cloudUrl)
        console.log("connection success");
    }catch(err){
        console.log("Error In DAtabase", err);
    }
}

module.exports = connectToDatabase;