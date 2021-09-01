const router = require('express').Router();
const {authMiddleware} = require('../middlewares');
const {authController} = require('../controllers');

router.post('/',
    authMiddleware.isFoundUser,
    authMiddleware.validateUserData);
    authController.loginUser();

module.exports = router;
