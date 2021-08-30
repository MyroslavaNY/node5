const {userService} = require('../service');

module.exports = {
    getAllOfUsers: async (req,res, next) =>{
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    // getUserById: async (req,res, next) =>{
    //     try {
    //         const users = await userService.findUsers();
    //         res.json(users);
    //     } catch (e) {
    //         next(e);
    //     }
    // },
    //
    // updateUser: async (req, res, next) =>{
    //     try {
    //         const {user_id} = req.params;
    //
    //         const user = await userService.updateUserById(user_id, req.body);
    //
    //         res.status(201).json(user);
    //     } catch (e) {
    //         next(e);
    //     }
    // },
    //
    // deleteUser: async (req, res, next) => {
    //     try {
    //         const { user_id } = req;
    //
    //         await userService.deleteUser(user_id);
    //
    //         res.status(204).end('user was deleted');
    //     } catch (e) {
    //         next(e);
    //     }
    // },

    createUser: async (req, res, next) => {
        try {
            const user = await userService.createUser(req.body);

            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
    }
};
