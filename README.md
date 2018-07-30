# ts-lib-hapi-status

Hapi.js plugin for reporting on service status. For now, this plugin just provides a hook to check if the service is still alive. The `/status` reoute this plugin creates simply replies with an HTTP status code of 200.

## NOTE: Use version 2.x.x for Hapi 17. For Hapi 16, use version 1.x.x

## Usage

Install the plugin:

```sh
$ yarn add tetrascience/ts-lib-hapi-status
```

Then wire the plugin into your Hapi.js server:

```js
const Hapi = require('hapi');
const hapiStatus = require('ts-hapi-status');

const server = new Hapi.server();

await server.register({
  plugin: hapiStatus
});

await server.start();
```

And that's it!
