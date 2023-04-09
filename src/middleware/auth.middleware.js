const jwt = require("jsonwebtoken");
require("dotenv").config();

  const authenticate = (req, res, next) =>{
    const token = req.headers["access-token"]
    //console.log(token)
    if(!token){
        return next({
            status: 401,
            error : "unauthorized",
            message: "not token providen"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET , { algoritms:"HS512"})
        //console.log(decoded)
        req.user = decoded
        next()
    } catch (error) {
      res.status(400).json(error)  
    }
  }
  module.exports = authenticate