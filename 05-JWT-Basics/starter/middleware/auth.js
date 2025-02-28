
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const loginMiddlware = async (req,res,next) => {
  console.log('Works!');
  next();
}

const authorizationMiddleware = async (req, res, next) =>{
  
  const authHeader = req.headers.authorization

  if(!authHeader || !authHeader.startsWith('Bearer ')){
    throw new CustomAPIError('Authorization error, No token provided', 401)
  }

  const token = authHeader.split(' ')[1]
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const {id, username} = decoded
    req.user = {id, username}
    next();
  } catch (error) {
    throw new CustomAPIError('Not Authorization to acces this rote', 401)
  }
  
}

module.exports = {authorizationMiddleware, loginMiddlware}