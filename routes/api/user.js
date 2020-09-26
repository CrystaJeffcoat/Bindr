const router = require("express").Router();
//const userController = require("../../controllers/userController");

// Matches with "/api/user/favorites"
router.post("/favorites", function(req, res) {
  res.send("<p>hello</>")
  
})

router.get("/favorites", function(req, res) {
  console.log(req.body)
  
})

module.exports = router;
