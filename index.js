const http = require("http")

const handleAllRequest = (req,res) =>{
    const url = req.url
    res.setHeader("content-type","text/html")
    if (url === "/"){
        res.write("<h1>Hello Node js</h1>")                     
    }
    else if (url === "/login"){
        res.write("<h2>Welcome to Login page</h2>")                     
    }
    else if (url == "/signup"){
        res.write("<h3>Sign up for more offerss</h3>")                     
    }
   else {
        res.write("<h1>Page not found</h1>")                     
    }
    res.end()
}

const server = http.createServer(handleAllRequest)

server.listen(5000, ()=>{
    console.log("server started")
})