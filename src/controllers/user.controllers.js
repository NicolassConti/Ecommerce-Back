const userServices = require("../services/user.services");
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body
        const result = await userServices.create(newUser)
        res.status(201).json(result)
        await transporter.sendMail({
            from: "continicolas6@gmail.com",
            to: result.email,
            subject: "Hola gato",
            html: `Bienvenido a mi Ecommerce-Api`
        
        })
     
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await userServices.getAll()
        res.json(allUsers)
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
    updateUser,
    getAllUsers
};

