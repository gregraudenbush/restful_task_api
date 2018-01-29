var mongoose = require('mongoose');
var Api = mongoose.model('Api');
module.exports = {

  show: function(req, res) {
    Api.find({}, function(err, tasks) {
      console.log("In Root Route!")  
      res.json({tasks: tasks});
    })
  },

  getone: function(req,res){
      Api.findOne({_id: req.params.id}, function(err, task){
        if(err){
            console.log("Bug in getone route");
          } else {
            res.json({task: task});
          }  
      })
  },

  // create: function(req, res) {
  //   var api = new Api({title: req.params.title, description: req.params.desc, completed: req.params.comp});
  //   api.save(function(err, task) {
  //     if(err){
  //       console.log("Bug in create route");
  //     } else {
  //       res.json({task: task});
  //     }
  //   })
  // },
  create: function(req, res) {
    var api = new Api({title: req.body.title, description: req.body.description, completed: req.body.completed});
    api.save(function(err, task) {
      if(err){
        console.log("Bug in create route");
      } else {
        res.json({task: task});
      }
    })
  },
  remove: function(req, res) {
    
    Api.remove({_id: req.params.id},function(err) {
      if(err){
        console.log("Bug in remove route");
      } else {
        res.redirect('/');
      }
    })
  },
  update: function(req,res){
      console.log('in update route')
      Api.findByIdAndUpdate(req.params.id, req.body, { new: true }), function(err){
        if(err){
            console.log("Bug in update route");
          } else {
            res.redirect('/');
          }
      }
  }

 
}
