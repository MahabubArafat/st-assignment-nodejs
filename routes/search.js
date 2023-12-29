const express = require("express");
const router = express.Router();
const searchController = require("../controllers/search.controller");
const { validateKeyword } = require("../validators/keyword.validator");

router.get("/", validateKeyword, searchController.searchKeyword);

module.exports = router;
