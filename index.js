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
