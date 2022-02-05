const express = require("express");
const router = express.Router();
const { getUser, editUser } = require("../controllers/user");
const { checkToken } = require("../middleware/checkToken");

router.get("/", checkToken, getUser);
router.post("/", checkToken, editUser);

module.exports = router;
