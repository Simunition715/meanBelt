app.controller('UsersController', function(UserFactory, $location){
	console.log('instanciating users controller...');
	var self = this;
	self.newUser = {};
	self.current_user = {};
	self.loginUser = {};
	self.polls = [];
	self.current_poll = {};

	UserFactory.session(function(res){
		if(res){
			self.current_user = res.data;
		}else {
			self.current_user = {};
			$location.url('/');
		}
	})
	self.go = function(){
		$location.url('/create')
	}
	self.indexPoll = function(){
		UserFactory.indexPoll(function(res){
			console.log(res)
			self.polls = res.data;
		})	
	}
	self.vote = function(option){
		UserFactory.vote(option, function(res){
			console.log(res);
			self.current_poll = res.data;
		})
	}
	self.delete = function(id){
		UserFactory.delete(id, function(res){
			self.indexPoll()
		})
	}
	self.filter = function(id){
		UserFactory.filter(id, function(res){
			console.log(res)
			console.log(id)
			self.current_poll = res.data;
			$location.url('/poll')
		})
	}
	self.goToPolls = function(){
		$location.url('/dashboard')
	}
	self.current = function(){
		self.current_poll = UserFactory.current_poll
	}

	self.createPoll = function(newPoll){
		newPoll._user = UserFactory.current_user.name;
		UserFactory.createsPoll(newPoll, function(res){
			self.newPoll = {};
			self.indexPoll()
			$location.url('/dashboard')
		})
	}
	self.logout = function(user){
		console.log("ok")
		UserFactory.logout(user, function(res){
			self.loginUser = {};
			$location.url('/')
		})
	}
	self.login = function(newUser){
		UserFactory.login(newUser, function(res){
			$location.url('/dashboard')	
		})
	}

	self.upVote = function(res){
		console.log('hello');
		UserFactory.upVote(self.topic.posts[0]._id,function(res){
			self.topic.posts[0].likes++;
			// self.topic = res.data;
		})
	}
	self.downVote = function(res){
		console.log('hello');
		UserFactory.downVote(self.topic.posts[0]._id,function(res){
			self.topic.posts[0].dislikes++;
		})
	}
	self.getCurrentUser = function(){
		return UserFactory.current_user;
	}

})