const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
	port: 8080
});

server.route({
	method: 'GET',
	path: '/hello',
	handler: (req, res) => res('Hello World!')
});


server.start(err => {

	if(err) {
		console.error('Seems like we hit a roadblock.');
		console.error(err);
	}

	console.log(`Server started at ${server.info.uri}`);

});