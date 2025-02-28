
const jwt = require('jsonwebtoken')
const {UnauthorizedError} = require('../errors/index')


const loginMiddlware = async (req,res,next) => {
  next();
}

const authorizationMiddleware = async (req, res, next) =>{
  
  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new UnauthorizedError('Authorization error, No token provided')
  }

  const token = authHeader.split(' ')[1]
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const {id, username} = decoded
    req.user = {id, username}
    next();
  } catch (error) {
    throw new UnauthorizedError('Not Authorization to acces this route')
  }
  
}

module.exports = {authorizationMiddleware, loginMiddlware}