const {passwordService} = require('../services');

module.exports = {

    loginUser: async(req, res, next) => {
        try {
            const {body, currentUser} = req;

            await compare(currentUser.password, body.password);

            res.json(true);
        } catch (e) {
            next(e);
        }
    }
};

