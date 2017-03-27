app.factory('UserFactory', function($http){
	var factory = {};
	factory.current_user = {};
	factory.current_poll = {};


	factory.session = function(callback){
		$http.get('session').then(function(res){
			if(!res.data.errors){
				factory.current_user = res.data;
				callback(res);
			}else {
				factory.current_user = {};
				callback(false);
			}
		})
	}

	factory.indexPoll = function(callback){
		$http.get('/polls').then(callback)
	}

	factory.delete = function(id, callback){
		$http.delete('/poll/'+id+'/delete').then(function(res){
			callback(res);
		})
	}

	factory.filter = function(id, callback){
		$http.get('/poll/'+id).then(function(res){
			factory.current_poll = res.data
			console.log('new')
			callback(res)
		})
	}

	factory.vote = function(option, callback){
		$http.put('/polls/'+factory.current_poll._id+'/option/'+option).then(function(res){
			console.log('/polls/'+factory.current_poll._id+'/option/'+option)
			factory.current_poll = res.data
			callback(res);
		})

	}
	
	factory.createsPoll = function(newPoll, callback){
		console.log(factory);
		$http.post("/polls", newPoll).then(callback)
	}

	factory.logout = function(user,callback){
		$http.get('/logout').then(callback)
	}

	factory.login = function(newUser, callback){
		$http.post("/login",newUser).then(function(res){
			if(!res.data.errors){
				factory.current_user = res.data;
			}
			callback(res);
		})
	}
	factory.login = function(loginUser, callback){
		$http.post("/login", loginUser).then(function(res){
			if(!res.data.errors){
				factory.current_user = res.data;
			}
			callback(res);
		})
	}
	return factory;
})