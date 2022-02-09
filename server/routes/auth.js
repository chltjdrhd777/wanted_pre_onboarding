const express = require("express");
const router = express.Router();
const {
  userCheck,
  signUp,
  signIn,
  guestLogin,
  signOut,
  mailcode,
  checkTokens,
} = require("../controllers/auth");

const { checkToken: checkTokenMiddleware } = require("../middleware/checkToken");

router.post("/user", userCheck);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.post("/mailcode", mailcode);

router.get("/guest", guestLogin);
router.get("/tokenlife", checkTokenMiddleware, checkTokens);

module.exports = router;
