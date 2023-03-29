const {check, validationResult} = require("express-validator")

const validateResults = require("../utils/validate")

const createUserValidator = [
    check("username", "El nombre de usuario no puede estar vacio")
      .exists()
      .withMessage("El Username debe de existir")
      .notEmpty()
      .withMessage("No debe de estar vacio")
      .isString()
      .withMessage("Debe de ser un string")
      .isLength({ min: 4 }) 
      .withMessage("Debe de tener minimo 4 caracteres"),
     check("email", "Error con el correo electronico")
      .exists()
      .withMessage("No se encontro la propiedad email")
      .notEmpty()
      .withMessage("No se encontro un valor para el email")
      .isString()
      .withMessage("Debe de ser un string")
      .isLength({ min: 7, max: 50 })
      .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
      .isEmail()
      .withMessage("El correo no tiene un formato correcto"),
    check("password", "Error con la contraseña")
      .exists()
      .withMessage("el password debe existir")
      .notEmpty()
      .withMessage("nos se encontro un valor para el password")
      .isString()
      .withMessage("Debe de ser un string")
      .isLength({ min: 4 })
      .withMessage("El password debe tener una longitud minima de 4"),
     check("avatar", "Error con el avatar")
      .exists()
      .withMessage("No se encuentra la propriedad avatar")
      .notEmpty()
      .withMessage("el avatar no puede ser un string vacio")
      .isLength({ min: 7 })
      .withMessage("El avatar debe tener una longitud minima de 7"),
       (req, res, next) => {
      validateResults(req, res, next);
    },
    
  ];

  
  module.exports = {
    createUserValidator,
  };