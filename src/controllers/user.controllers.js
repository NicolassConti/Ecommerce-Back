const userServices = require("../services/user.services");

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await userServices.create(newUser)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = req.body
        await userServices.update(data, id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
};

module.exports = {
    createUser,
    updateUser
};

