const mongoose = require("mongoose");

const DB = "mongodb+srv://<dbUser>:<U74ry9Zmzr6WkGuM>@cluster0.6jy92ta.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));