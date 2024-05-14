const {PeerServer} = require("peer");

const port = 9001;

const peerServer =  PeerServer({
    port: port,
    path: "/",
});

// Start the PeerServer
peerServer.on('connection', (client) => {
    console.log(`Client connected: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
    console.log(`Client disconnected: ${client.getId()}`);
});