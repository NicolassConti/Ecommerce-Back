const userServices = require("../services/user.services");
const bcrypt = require("bcrypt");
const authServices = require("../services/auth.services");

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await userServices.getUser(email)
        if(!user) {
            return next({
                status : 400,
                message: "invalid email",
                error: "user not found"
            })
        }
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) {
            return next({
                status : 400,
                message: "the password doesn't match with email user",
                error: "invalid password"
            })
        }
        const{id, username, firstname, lastname,} = user
        const token = authServices.genToken({id, username, firstname, lastname})
        res.json ({id, username, email, firstname, lastname, token})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userLogin
}