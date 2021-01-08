# Web Chat
Application that permits users to connect and participate in a live chat with other clients accessing the same server through the use of websockets.

## Installation and Running
```
git clone https://github.com/djain106/web-socket-chat
cd client
npm install
npm start
```
On a separate terminal:
```
cd server
npm install
npm start
```
The website/client is hosted at: http://localhost:3006/
The server is hosted at: http://localhost:8000/

Simply enter the URL on your local machine. Enter a username and send messages using a websocket connection. This project was primarily to help me learn more about how to integrate websockets within a react application.


Built following the project found [here](https://github.com/kokanek/web-socket-chat)