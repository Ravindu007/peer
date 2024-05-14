const {PeerServer} = require("peer");

const port = 9001;

const peerServer =  PeerServer({
    port: port,
    path: "/",
});

let peerCount = 0;

// Start the PeerServer
peerServer.on('connection', (client) => {
    console.log(`Client connected: ${client.getId()}`);
    peerCount = peerCount + 1;
    console.log("Total peers in the server: ", peerCount)
});

peerServer.on('disconnect', (client) => {
    console.log(`Client disconnected: ${client.getId()}`);
    peerCount =- peerCount - 1 ;
    console.log("Total peers in the server: ", peerCount)
});