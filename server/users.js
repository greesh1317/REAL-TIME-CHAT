const users = [];

// Add a user to the room
const addUser = ({ id, name, room }) => {
  if (!name || !room) return { error: 'Username and room are required.' };

  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) return { error: 'Username is taken.' };

  const user = { id, name, room };
  users.push(user);

  return { user };
};

// Remove user by socket ID
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0]; // Return removed user
  }

  return null; // Explicit return in case not found
};

// Get a single user by ID
const getUser = (id) => users.find((user) => user.id === id);

// Get all users in a specific room
const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room.trim().toLowerCase());
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
