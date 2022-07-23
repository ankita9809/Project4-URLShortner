const express = require('express');
const router = express.Router()
const urlController = require("../controllers/urlController")

// ----------------------------- CREATE URL --------------------------------------
router.post("/url/shorten", urlController.createUrl)

// ----------------------------- GET URL -----------------------------------------
router.get("/:urlCode", urlController.getUrl)



module.exports = router