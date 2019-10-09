const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ nickname, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, nickname, room });

    if (error) return callback(error);

    socket.join(user.room);

    // socket.emit('playerHasPlayed', { user: 'admin', text: `${user.nickname}, welcome to room ${user.room}.` });
    // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.nickname} has joined!` });
    io.to(user.room).emit('updateVisibleUsers', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendCard', (card, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('playerHasPlayed', { user: user.nickname, cardData: card });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      // io.to(user.room).emit('message', { user: 'admin', text: `${user.nickname} has left.` });
      io.to(user.room).emit('updateVisibleUsers', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));