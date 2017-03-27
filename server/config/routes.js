var Users = require('../controllers/users');
var Polls = require('../controllers/polls');

module.exports = function(app){
	app.get('/users',Users.index);
	app.post('/login',Users.login);
	app.get('/logout',Users.logout);
	app.post('/polls',Polls.create);
	app.get('/polls',Polls.index);
	app.get('/session',Users.session);
	app.get('/poll/:id',Polls.filter);
	app.put('/polls/:id/option/:option',Polls.vote);
	app.delete('/poll/:id/delete',Polls.delete);

}