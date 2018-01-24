var mongoose = require('mongoose');

var ApiSchema = new mongoose.Schema({
  title: {type: String, required: true, maxlength: 255},
  description: {type: String, required: true, maxlength: 255}, 
  completed: {type: String, required: true, maxlength: 255},
  created_at: { type: Date, required: true, default: Date.now },
  updated_at: { type: Date, required: true, default: Date.now }
})

var Api = mongoose.model('Api', ApiSchema);