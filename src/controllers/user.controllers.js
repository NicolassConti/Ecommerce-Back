const userServices = require("../services/user.services");

const createUser = async(req, res, next) =>{
    try {
        const newUser = req.body
        const result = await userServices.create(newUser)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createUser
};

