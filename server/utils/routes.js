const users = require('./../controllers/users.js');
const polls = require('./../controllers/polls.js');
const {resolve} = require('path');
module.exports = function (app) {
	//Set up routes
	// Index route
	console.log("in routes right now")
	app.get('/api/inSession', users.index);
	app.post('/api/create', users.register);
	app.post('/api/login', users.login);
	app.get('/api/dashboard', users.dashboard);
	app.get('/api/logout', users.logout);

	app.post('/api/createPoll', polls.create)
	app.get('/api/getPoll', polls.getPolls)
	app.get('/api/poll/:id', polls.poll)
	app.delete('/api/destroy/:id', polls.remove)
	app.put('/api/optionLike', polls.optionLikes)

	app.all("*", (req, res, next) => {
		res.sendfile(resolve("./public/dist/index.html"));
	})

};
