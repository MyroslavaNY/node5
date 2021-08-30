const {User} = require('../dataBase/User');

module.exports = {
    createUser: (user) => User.create(user),
    deleteUser:(user_id) => User.delete(user_id),
    findUsers:() => User.find(),
    updateUserById:(user_id, updata) => User.updateOne(user_id, updata)

};
