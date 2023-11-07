const express = require("express");
const app = express();
const cors = require("cors");
const connectToDatabase = require("./DB/db");
const Route = require("./Route/Routes");

app.use(express.json());
app.use(cors());
app.use("/api", Route);

app.use("/" , (req,res) => {
    res.send("This Is HOME Page")
})


app.listen(4007, async() => {
    try{
        await connectToDatabase()
        console.log("Your server is running by PORT - 4007");
    }catch(err){
        console.log("Error in starting server", err);
    }
})