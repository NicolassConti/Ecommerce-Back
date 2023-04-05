const { check, validationResult } = require("express-validator")

const validateResults = require("../utils/validate")

const createProductInOrdersValidator = [
  check("orderId", "El id de la orden no puede estar vacio")
    .exists()
    .withMessage("El orderId debe de existir")
    .notEmpty()
    .withMessage("No debe de estar vacio")
    .isNumeric()
    .withMessage("Debe de ser un numero")
    .isLength({ min: 1 })
    .withMessage("Debe de tener minimo 1 caracteres"),
  check("productId", "El id del producto no puede estar vacio")
    .exists()
    .withMessage("El productId debe de existir")
    .notEmpty()
    .withMessage("No debe de estar vacio")
    .isNumeric()
    .withMessage("Debe de ser un numero")
    .isLength({ min: 1 })
    .withMessage("Debe de tener mimimo 1 caracteres"),
  check("quantity", "La cantidad no puede estar vacia")
    .exists()
    .withMessage("la cantidad debe existir")
    .notEmpty()
    .isNumeric()
    .withMessage("Debe de ser un numero"),
  check("price", "El precio no puede estar vacio")
    .exists()
    .withMessage("El precio debe existir")
    .notEmpty()
    .isNumeric()
    .withMessage("Debe de ser un numero")
    .isLength({ min: 1 })
    .withMessage("Debe de tener minimo 1 caracteres"),
  (req, res, next) => {
    validateResults(req, res, next);
  },

];


module.exports = {
  createProductInOrdersValidator,
};