const { query } = require("express-validator");

exports.validateKeyword = [
  query("keyword")
    .isAlpha()
    .withMessage("The keyword Must be alphabetic")
    .bail(), // Stop validation after first error
];
