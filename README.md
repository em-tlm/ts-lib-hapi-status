# ts-lib-hapi-status

Hapi.js plugin for reporting on service status.  For now, this plugin just provides a hook to check if the service is still alive.  The `/status` reoute this plugin creates simply replies with an HTTP status code of 204 (No Content).

## Usage

Install the plugin:

```sh
$ npm install tetrascience/ts-lib-hapi-status -S
```

Then wire the plugin into your Hapi.js server:

```js
const hapi = require('hapi');
const hapiStatus = require('ts-hapi-status');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});

server.register(hapiStatus);
```

And that's it!
