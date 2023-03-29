const { Router } = require("express");
const {
    getAllUsers, 
    createUser, 
    updateUser
} = require("../controllers/user.controllers");
const authenticate = require("../middleware/auth.middleware");
const { createUserValidator } = require("../validator/users.validator");



const router = Router();



router.get("/api/v1/users",authenticate, getAllUsers);

router.post("/api/v1/users", createUserValidator, createUser);

router.put("/api/v1/users/:id", updateUser);




module.exports = router;