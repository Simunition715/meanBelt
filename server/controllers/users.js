var mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll');

module.exports = {
	index: function(req,res){
		User.find({}).exec(function(err,doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
	login: function(req,res){
		User.findOne({name:req.body.name}).exec(function(err,doc){
			console.log(doc);
			console.log("********************")
			if(err){
				return res.json(err);
			}
			if(!doc){
				var user = new User(req.body);
				user.save(function(err,doc){
					req.session.user = doc
					return res.json(doc);
				})
			}
			else {
				req.session.user = doc
				return res.json(doc);
			}
		})
	},
	session: function(req, res){
		if(!req.session.user){
			return res.json({
				"errors": "not authorized"
			})
		}
		return res.json(req.session.user);
	},
	logout: function(req,res){
		console.log('logout',req.session.user)
		req.session.destroy(function(err){
			return res.json(err)
		})

	}
}