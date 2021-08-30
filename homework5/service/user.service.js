const User = require('../dataBase/User');

module.exports = {
    createUser:(user) => User.create(user),
    deleteUser:(user_id) => User.deleteOne(user_id),
    findUsers:() => User.find(),
    updateUserById:(user_id) => User.create(user_id)
};
