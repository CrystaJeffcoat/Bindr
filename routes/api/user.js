const router = require("express").Router();
// const userController = require("../../controllers/userController");
const User = require("../../models/user");

// Matches with "/api/user/"
router.put('/', function({ body }, res) {
  User.find({
    username: body.username,
    password: body.password
  })
  .then(data => {
    if(!data.length) res.json("username doesnt exist");
    else {
      res.json(data);
      // redirect to home page 
    };
  })
  .catch(err => res.status(400).json(err));
});

router.post("/add", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password})

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
