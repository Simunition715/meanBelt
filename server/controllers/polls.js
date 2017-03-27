var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

module.exports = {
	index: function(req, res){
		Poll.find({}).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			console.log("showing...");
			return res.json(doc);
		})
	},
	create: function(req, res){
		var poll = new Poll(req.body);
		console.log(poll)
		poll.save(function(err, doc){
			if(err){
				return res.json(err)
			}
			return res.json(doc)
			console.log(doc)
		})
	},
	delete: function(req, res){
		Poll.findByIdAndRemove(req.params.id).exec(function(err, poll){
			if(err){
				return res.json(err);
			}
			return res.json(poll);
		})		
	},
	vote: function(req, res){
		Poll.findById(req.params.id).exec(function(err, poll){
			if(err){
				return res.json(err);
			}
			if(!poll){
				return res.json({
					"errors": "Invalid Poll"
				})
			}
			if(req.params.option == 1)
				poll.option1.count++;
			else if (req.params.option == 2)
				poll.option2.count++;
			else if (req.params.option == 3)
				poll.option3.count++;
			else if (req.params.option == 4)
				poll.option4.count++;
			poll.save(function(err, poll){
				if(err){
					return res.json(err);
				}
				return res.json(poll);
				console.log(poll);
			})
		})
	},
	filter: function(req, res){
		Poll.findById(req.params.id).exec(function(err, doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
}