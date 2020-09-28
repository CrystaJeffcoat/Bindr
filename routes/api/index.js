const router = require("express").Router();
const userRoutes = require("./user");
const bookRoutes = require('./books');

// user routes
router.use("/user", userRoutes);
// book routes
router.use('/books', bookRoutes);

module.exports = router;
