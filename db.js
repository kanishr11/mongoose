const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/mongoose-connect")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("Failed")
})

const newSchema1 = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    passWord:{
        type:Number,
        require:true
    }
})

const add = mongoose.model("adds",newSchema1)
module.exports = add