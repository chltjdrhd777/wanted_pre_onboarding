const express = require("express");
const router = express.Router();
const { getInitialTag, getTags } = require("../controllers/tag");
const { checkToken } = require("../middleware/checkToken");

router.get("/:query", checkToken, getTags);
router.get("/", checkToken, getInitialTag);

module.exports = router;
