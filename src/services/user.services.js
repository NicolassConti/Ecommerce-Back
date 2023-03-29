const User = require("../models/users.models");


class userServices {
    static async create(newUser){
        try {
            const userCreated = await User.create(newUser)
            return userCreated
        } catch (error) {
            throw error
        }
    }
    static async update(data,id){
        try {
            const updateUser = await User.update(data,{
                where:{id}
            })
            return updateUser
            
        } catch (error) {
            throw error
        }
    }
};


module.exports = userServices;