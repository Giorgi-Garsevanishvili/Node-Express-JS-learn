const { required } = require('joi')
const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema({
  title: {
    type:String,
    required:true,
    maxlength: 50,
  }
})