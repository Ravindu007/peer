const { PeerServer } = require("peer");

const port = 9001;
const connectedClients = [];

const peerServer = PeerServer({
    port: port,
    path: "/",
});

// Start the PeerServer
peerServer.on('connection', (client) => {
    console.log(`Client connected: ${client.getId()}`);
    connectedClients.push(client);
    logTotalPeers();
});

peerServer.on('disconnect', (client) => {
    console.log(`Client disconnected: ${client.getId()}`);
    const index = connectedClients.indexOf(client);
    if (index !== -1) {
        connectedClients.splice(index, 1);
    }
    logTotalPeers();
});

function logTotalPeers() {
    const totalPeers = connectedClients.length;
    console.log(`Total peers connected: ${totalPeers}`);
}
