const assert = require('chai').assert;
const hapi = require('hapi');

const status = require('../../lib');


describe('/status', () => {
  beforeEach(function() {
    this.server = new hapi.Server();
    this.server.connection({ port: 8000 });
    this.server.register(status);
  });

  it('should return a 204 response code', function(done) {
    this.server.inject('/status')
      .then((res) => {
        assert.strictEqual(res.statusCode, 204);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should return an empty payload', function(done) {
    this.server.inject('/status')
      .then((res) => {
        assert.isUndefined(res.source);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
