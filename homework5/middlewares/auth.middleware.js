const User = require('../dataBase/User');
const {ErrorHandler} = require('../errors');
const {userValidator} = require('../validators');

module.exports = {
    isFoundUser: async (req, res, next) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email})

        if (!user){
            throw new ErrorHandler(418, 'User Not Found')
        }
        req.currentUser = user;
        next();
    } catch (e){
        next(e);
    }
},
    validateUserData: (req, res, next) => {
        try {
            const { error } = userValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(404, 'YOUR EMAIL OR PASSWORD IS WRONG');
            }
            next();
        } catch (e) {
            next(e);
        }
    }
};
