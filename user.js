const   express  = require("express")
const router = express.Router()

router.route("/user/:id")
.get ((req, res)=>{
    res.send("fetching  user with id:" + req.params.id)

})
.put((req, res) => {
    res.send("updating user")
})
module.exports = router