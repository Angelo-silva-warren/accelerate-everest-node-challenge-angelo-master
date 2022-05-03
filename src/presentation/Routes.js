
const { Router }  = require("express");

const router = Router()

const UserController = require("./controllers/UserController");

router.get("/", UserController.handle);

router.post("/customer", (req, res) =>{
  res.json(req.body)
  
});

module.exports = router;
