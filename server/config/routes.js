var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var api = require('../controllers/task.js');

module.exports = function(app) {

  app.get('/tasks', api.show)

  app.get('/:id', api.getone)

  app.get('/new/:title/:desc/:comp', api.create)

  app.get('/remove/:task', api.remove)

  app.put('/:id', api.update) 
  
}