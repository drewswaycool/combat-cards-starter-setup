const users = [];

const addUser = ({ id, nickname, room }) => {
  nickname = nickname.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.nickname === nickname);
  const numberOfUsers = users.length;

  if (!nickname || !room) return { error: 'Nickname and room are required.' };
  if (numberOfUsers === 2) return { error: 'That room is full' }
  if (existingUser) return { error: 'Nickname is taken.' };

  const user = { id, nickname, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };