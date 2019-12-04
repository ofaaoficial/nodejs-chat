const users = [];

const addUser = ({id, name, room}) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find(
        user =>
            name === user.name &&
            room === user.room
    );

    if(existingUser) return { error: "Username is taken" };

    users.push({id, name, room});
};

const removeUser = id => {
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = room => users.filter(user => user.room === room);

export default {
    removeUser,
    addUser,
    getUser,
    getUsersInRoom,
};