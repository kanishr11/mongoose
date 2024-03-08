const express = require("express")
const cors = require("cors")
const add = require("./db")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/senddata",async(req,res)=>{
    const {userName}=req.body
    const {passWord}=req.body
 try {
    await add.insertMany([{userName:userName,passWord:passWord}])
    
 } catch (error) {
    console.log(error)
 }
})

app.post("/",async(req,res)=>{
    const {userName,passWord} = req.body
    const data = {
        userName:userName,
        passWord:passWord
    }
    await add.insertMany([data])
})

app.listen(8000,()=>{
    console.log("Port Connect")
})