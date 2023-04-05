const { check, validationResult } = require("express-validator")

const validateResults = require("../utils/validate")

const createCartValidator = [
    check("userId", "El id del usuario no puede estar vacio")
    .exists()
    .withMessage("El userId debe de existir")
    .notEmpty()
    .withMessage("No debe de estar vacio")
    .isNumeric()
    .withMessage("Debe de ser un numero")
    .isLength({ min: 1 })
    .withMessage("Debe de tener minimo 1 caracteres"),
    check("totalPrice", "El precio total no puede estar vacio")
        .exists()
        .withMessage("El totalPrice debe de existir")
        .notEmpty()
        .withMessage("No debe de estar vacio")
        .isNumeric()
        .withMessage("Debe de ser un numero")
        .isLength({ min: 3 })
        .withMessage("Debe de tener minimo 3 caracteres"),
    (req, res, next) => {
        validateResults(req, res, next);
    },
    
];


module.exports = {
    createCartValidator,
};