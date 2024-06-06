import jwt from "jsonwebtoken";
export const authMiddleware = function (roles) {
    return function(req,res,next){
        const token =req.headers.authorization
        if(!token){
            res.status(403).send("u don't have token")
            return
        }
        const decoded = jwt.verify(token, 'sadsadasdasdsad123123');
        if(!roles.includes(decoded.role)){
            res.status(403).send("u don't have access")
            return
        }
        next()
    }
   
  }