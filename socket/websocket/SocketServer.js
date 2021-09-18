const WebSocket = require('ws')

const wss = new WebSocketServer({ port: 9527 });

wss.on('connection', function connection(ws) {

    wss.on('open', function open() {
        console.log('connected');
        resizeBy.send('hello')

    });
    ws.on('message', function incoming(data, isBinary) {

        // ws.send(data)
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });

        wss.on('close', function close() {
            console.log('disconnected');
        });
    })
})