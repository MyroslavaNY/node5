const {userService} = require('../services');

module.exports = {
    getAllOfUsers: async (req,res, next) =>{
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            await userService.createUser(req.body);
            const user = await userService.createUser(req.body);

            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    }
};
