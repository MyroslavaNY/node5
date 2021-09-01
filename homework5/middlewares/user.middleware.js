const User = require('../dataBase/User');
const {ErrorHandler} = require('../errors');
const {userValidator} = require('../validators');

module.exports = {
    isUserPresent: async (req,res,next) =>{
        try {
            const { user_id } = req.params;
            const currentUser = await User.findById(user_id);
            if (!currentUser){
                throw new ErrorHandler(418, 'User Not Found');
            }
            req.user = currentUser;
            next();
        } catch (e){
            next(e);
        }
    },
    checkUniqueEmail:async (req, res, next) => {
        try {
            const { email } = req.body;
            const userByEmail = await User.findOne({email});

            if (userByEmail){
                throw new ErrorHandler(409, `Email:${email} exist`);
            }
            next();
        } catch (e) {
            next(e);
        }
    },
    isUserRegistered: async (req, res, next)=>{
        try {
            const {email, password} = req.body;
            if (!email && ! password){
                throw new ErrorHandler(412, 'Data Not Found');
            }
            next();
        } catch (e){
            next(e);
        }
    },
    validateUserParams: (req, res, next) => {
        try {
            const { error } = userValidator.paramsUserValidator.validate(req.params);

            if (error) {
                throw new ErrorHandler(400, 'INVALID_OPTION');
            }

            next();
        } catch (e) {
            next(e);
        }
    },
};

