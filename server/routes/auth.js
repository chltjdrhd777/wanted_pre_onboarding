const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut, oauthSignUp, mailcode } = require("../controllers/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.post("/mailcode", mailcode);

module.exports = router;
