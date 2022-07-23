const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route");
const mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://functionup-cohort:P8qVpKuqjaLAhMJT@cluster0.ahfdt.mongodb.net/ankita-db", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function(){
    console.log('Express app running on port' + (process.env.PORT || 3000))
})