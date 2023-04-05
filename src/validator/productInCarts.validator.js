const {check, validationResult} = require("express-validator")

const validateResults = require("../utils/validate")

const createProductInCartValidator = [
    check("cartId", "El cartId no puede estar vacio")
      .exists()
      .withMessage("El cartId debe de existir")
      .notEmpty()
      .withMessage("No debe de estar vacio")
      .isNumeric()
      .withMessage("Debe de ser un numero")
      .isLength({ min: 1 }) 
      .withMessage("Debe de tener minimo 1 caracter"),
      check("productId", "El productId no puede estar vacio")
      .exists()
      .withMessage("El productId debe de existir")
      .notEmpty()
      .withMessage("No debe de estar vacio")
      .isNumeric()
      .withMessage("Debe de ser un numero")
      .isLength({ min: 1 }) 
      .withMessage("Debe de tener minimo 1 caracter"),
      check("quantity", "la quantity no puede estar vacia")
      .exists()
      .withMessage("la quantity debe de existir")
      .notEmpty()
      .withMessage("No debe de estar vacia")
      .isNumeric()
      .withMessage("Debe de ser un numero")
      .isLength({ min: 1 }) 
      .withMessage("Debe de tener minimo 1 caracter"),
      check("price", "El price no puede estar vacio")
      .exists()
      .withMessage("El price debe de existir")
      .notEmpty()
      .withMessage("No debe de estar vacio")
      .isNumeric()
      .withMessage("Debe de ser un numero")
      .isLength({ min: 1 }) 
      .withMessage("Debe de tener minimo 1 caracter"),     
       (req, res, next) => {
      validateResults(req, res, next);
    },
    
  ];

  
  module.exports = {
    createProductInCartValidator,
  };