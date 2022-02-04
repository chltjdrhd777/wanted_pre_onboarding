const express = require("express");
const router = express.Router();
const { userCheck, signUp, signIn, guestLogin, signOut, mailcode } = require("../controllers/auth");

router.post("/user", userCheck);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.post("/mailcode", mailcode);

router.get("/guest", guestLogin);

module.exports = router;
