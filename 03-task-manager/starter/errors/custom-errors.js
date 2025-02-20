

class CustomAPIError extends Error {
  constructor (message, statusCoode){
    super(message)
    this.statusCoode = statusCoode
  }
}

const createCustomError = (msg, statusCoode) => {
  return new CustomAPIError(msg, statusCoode)
}

module.exports = {createCustomError, CustomAPIError}