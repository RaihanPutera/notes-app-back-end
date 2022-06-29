const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
              origin: ['*'],
            },
          },
    });

server.route(routes);    

await server.start();
console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
// Server SSH: 
// ssh -i "notes-api-webserver.pem" ubuntu@ec2-3-0-180-48.ap-southeast-1.compute.amazonaws.com