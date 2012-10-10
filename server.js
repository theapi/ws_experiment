/**
 * https://github.com/einaros/ws
 *
 * npm install ws
 */

//var exec = require("child_process").exec;
 
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});
  
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
    
    /*
      exec("find /",
    { timeout: 1000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      ws.send(stdout);
    });
    */
    
});