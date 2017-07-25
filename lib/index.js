const Promise = require('bluebird');

const pkg = require('../package');


module.exports = function statusPlugin(server, options, next) {
  server.route({
    method: 'GET',
    path: '/status',
    handler: function statusGetHandler(request, reply) {
      const response = reply().code(204);
      return Promise.resolve(response);
    },
  });

  return next();
};


module.exports.attributes = {
  name: 'service-status',
  version: pkg.version,
};
