const {check, validationResult} = require("express-validator")

const validateResults = require("../utils/validate")

const createProductValidator = [
    check("name", "El nombre del producto no puede estar vacio")
      .exists()
      .withMessage("El name debe de existir")
      .notEmpty()
      .withMessage("No debe de estar vacio")
      .isString()
      .withMessage("Debe de ser un string")
      .isLength({ min: 5 }) 
      .withMessage("Debe de tener minimo 5 caracteres"),
     check("description", "la descripcion no puede estar vacia")
     .exists()
     .withMessage("la descripcion debe de existir")
     .notEmpty()
     .withMessage("No debe de estar vacia")
     .isString()
     .withMessage("Debe de ser un string")
     .isLength({ min: 6 }) 
     .withMessage("Debe de tener minimo 6 caracteres"),
    check("price", "El precio no puede estar vacio")
      .exists()
      .withMessage("el precio debe existir")
      .notEmpty()
      .withMessage("nos se encontro un valor para el precio")
      .isNumeric()
      .withMessage("Debe de ser un numero"),
     check("availableQty", "La cantidad del producto debe existir")
      .exists()
      .withMessage("No se encuentra la cantidad del producto")
      .notEmpty()
      .withMessage("la cantidad del producto no puede ser un string vacio")
      .isLength({ min: 1 })
      .withMessage("la cantidad debe tener una longitud minima de 1"),
      check("userId", "El id del usuario no puede estar vacio")
      .exists()
      .withMessage("No se encuentra el id del usuario")
      .notEmpty()
      .withMessage("El id del usuario debe ser un numero")
      .isLength({ min: 1 })
      .withMessage("El id de un usuario debe tener una longitud minima de 1"),
      check("productImage", "La imagen del producto no puede estar vacia")
      .exists()
      .withMessage("Debe ser un string o imagen")
      .isLength({min : 3}),
       (req, res, next) => {
      validateResults(req, res, next);
    },
    
  ];

  
  module.exports = {
    createProductValidator,
  };