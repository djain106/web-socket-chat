import websocket from 'websocket';
import http from 'http';

const SOCKET_SERVER_PORT = 8000;

// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(SOCKET_SERVER_PORT, () => {
    console.log(`Listening on port: ${SOCKET_SERVER_PORT}`);
});

const wsServer = new websocket.server({
    httpServer: server
});

const clients = {};

// This code generates unique userid for everyuser.
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
}

wsServer.on('request', function (request) {
    console.log((new Date()) + ' Received a new connection from origin ' + request.origin + '.');

    var userId = getUniqueID();
    // Add logic for verifying origin of request.
    const connection = request.accept(null, request.origin);
    client[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ', message.utf8Data);

            // broadcasting message to all connected clients
            for (key in clients) {
                clients[key].sendUTF(message.utf8Data);
                console.log('Sent Message to: ', clients[key]);
            }
        }
    })

})