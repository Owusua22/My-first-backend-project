var express = require("express")

const app = express()
const userRoutes = require("./Routes/user.js")

// middlewares

app.use((req, res, next)=>{
    console.log("middleware being executed");
    next()
})
// routes
app.get("/", (req,res) =>{
    res.send("Hi there, Welcome to Sally's kitchen & More")
})
app.get("/contact",(req, res)=>{
    res.send("Contact us")
})

app.post("/create", (req,res) =>{
    res.send("Create new Post")
})
app.put("/update", (req,res) =>{
    console.log("updating post")
    res.send("Update Post")
})
app.delete("/delete", (req,res) =>{
    console.log("Deleting post")
    res.send("Delete Post")
})
app.use("/",userRoutes)

app.listen(5001,()=>{
    console.log("localhost is being executed");
})