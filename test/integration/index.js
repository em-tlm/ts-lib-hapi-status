/* eslint new-cap:0 */

const assert = require('chai').assert;
const Hapi = require('hapi');

const lib = require('../../lib');

describe('/status', () => {
  beforeEach(async function() {
    this.server = new Hapi.server({ port: 8000 });

    await this.server.register({
      plugin: lib,
    });

    await this.server.start();
  });

  it('should return a 200 response code', async function() {
    const response = await this.server.inject('/status');
    assert.strictEqual(response.statusCode, 200);
  });
});
