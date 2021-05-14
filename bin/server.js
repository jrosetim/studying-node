'use strict'

const app = require('../src/app.js');
const  http = require('http');
const debug = require('debug')('rosetimNode:server');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port)
server.on('listening',onLinstening)
console.log(`API running on port ${port}`);


function onLinstening() {
    const addr = server.address();
    const bind = typeof addr ===  'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

    debug(`Listening on ${bind}`);
}

