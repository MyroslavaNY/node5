const Joi = require('joi');
const {CURRENT_YEAR, EMAIL_REGEXP, PASSWORD_REGEXP} = require('../config/variables');
const userRolesEnum = require('../config/user-roles.enum');

const girlValidator = Joi.object({
    name: Joi.string(),
    age: Joi.number().min(15).max(60)
});

const createUserValidator = Joi.object({
    name: Joi.string().alphanum().min(2).max(30).required(),
    password: Joi.string().alphanum().min(8).max(128).required(),
    born_year: Joi.number().min(CURRENT_YEAR-120).max(CURRENT_YEAR-6),
    role: Joi.string().allow(...Object.values(userRolesEnum)),
    email: Joi.string().regex(EMAIL_REGEXP).required(),

    car:Joi.boolean(),

    girls: Joi.array()
        .items(girlValidator)
        .when('car', {is:true, then: Joi.required()})
});

const updateUser = Joi.object({
    name: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().regex(EMAIL_REGEXP)
});

module.exports = {
    createUserValidator,
    updateUser
};

