const net = require('net')

const server = net.createServer((socket) => {
    // socket.end('goodbye\n');
    socket.write('hello')
})
socket.on('data', (chunk) => {
    console.log(chunk.toString())
})
server.on('error', (err) => {
    // Handle errors here.
    throw err;
});

// Grab an arbitrary unused port.
server.listen('9527', () => {
    console.log('opened server on', server.address());
});