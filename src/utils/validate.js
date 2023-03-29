const { validationResult } = require("express-validator");

const validateResults = (req,res,next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    next({
      status: 400,
      name: "Validation Error",
      message: {
        error: error.array().map((error) => ({ msg: error.msg })),
      },
    });
  }
};

module.exports = validateResults;