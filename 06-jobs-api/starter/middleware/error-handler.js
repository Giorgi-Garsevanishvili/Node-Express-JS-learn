const { object } = require('joi')
const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

 let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'something went wrong, please try again later!'
  }

  
  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message })
  // }

  if( err.name === 'ValidationError'){
    customError.message = Object.values(err.errors).map((item)=>item.message).join(',')
    customError.statusCode = StatusCodes.BAD_REQUEST
  }

  if(err.code && err.code === 11000){
    customError.msg = `Dublicate value entered on ${Object.keys(err.keyValue)} field, please enter another value`,
    customError.statusCode = StatusCodes.BAD_REQUEST
  }

  if(err.name === 'CastError'){
    customError.msg = `No item found with id: ${err.value}`
    customError.statusCode = StatusCodes.NOT_FOUND
  }
  
  return res.status(customError.statusCode).json({ msg: customError.msg })
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandlerMiddleware
