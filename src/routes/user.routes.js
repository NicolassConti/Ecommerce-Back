const { Router } = require("express");
const {createUser} = require("../controllers/user.controllers");
const {updateUser} = require("../controllers/user.controllers");
const { createUserValidator } = require("../validator/users.validator");



const router = Router();


router.post("/api/v1/users", createUserValidator , createUser);

router.put("/api/v1/users/:id", updateUser);




module.exports = router;