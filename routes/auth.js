const authController = require("../controllers/authControllers");
const router = require("express").Router();

//REGISTER
router.post("/register", authController.registerUser);

//LOGIN
router.post("/login", authController.loginUser);

// logout
router.get("/logout", authController.logoutUser);

module.exports = router;
