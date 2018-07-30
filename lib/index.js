const pkg = require('../package');

const register = server =>
  server.route({
    method: 'GET',
    path: '/status',
    config: {
      tags: ['status', 'monitor'],
      description: 'Check if the server is healthy',
      handler: () => ({ status: 'ok' }),
      auth: false,
    },
  });

exports.plugin = {
  pkg,
  register,
};
