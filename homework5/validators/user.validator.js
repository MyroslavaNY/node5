const Joi = require('joi');
const {CURRENT_YEAR, EMAIL_REGEXP, PASSWORD_REGEXP} = require('../config/variables');
const {userRolesEnum} = require('../config/usersRoles.enum');

const createUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string().regex(PASSWORD_REGEXP).required(),
    born_year: Joi.number().min(CURRENT_YEAR-120).max(CURRENT_YEAR-6),
    role: Joi.string().allow(...Object.values(userRolesEnum)),
    email: Joi.string().regex(EMAIL_REGEXP).required(),

    car:Joi.boolean(),

});

const updateUser = Joi.object({
    name: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().regex(EMAIL_REGEXP)
});

module.exports = {
    createUserValidator,
    updateUser
};

