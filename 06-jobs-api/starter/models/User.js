const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name:{
    type:String,
    required: [true,'Please prove name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type:String,
    required: [true, 'Please provide Email'],
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please Provide Correct email'],
    unique: true
  },
  password: {
    type:String,
    require: [true, 'please provide password'],
    minlength: 6,
    maxlength: 20,
  }
})

module.exports = mongoose.model('User', userSchema)