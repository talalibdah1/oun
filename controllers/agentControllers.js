'use strict';

var mongoose = require('mongoose'),
	Agent = mongoose.model('Agent');

exports.create_agent = function(req, res) {
  var new_agent = new Agent(req.body);
  new_agent.author = req.user._id;
  new_agent.save(function(err, agent) {
    if (err)
      res.send(err);
    res.json(agent);
  });
};

exports.list_agents = function(req, res) {
	Agent.find({}, function(err, agent){
		if (err)
			res.send(err);
		res.json(agent);
	});
};

exports.find_agent = function(req, res) {
	Agent.findById(req.params.agentId, function(err, agent){
		if(err)
			res.send(err);
		res.json(agent);
	});
};

exports.update_agent = function (req, res){
	Agent.findOneAndUpdate({_id: req.params.agentId}, req.body, {new: true}, function(err, agent){
		if(err)
			res.send(err);
		res.json(agent);
	});
};