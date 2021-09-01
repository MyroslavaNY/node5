const router = require('express').Router();

const {
    userMiddleware: {checkUniqueEmail},
    authMiddleware: {validateUserData}
} = require('../middlewares');

const {
    authController:{loginUser}
} = require('../controllers');

router.post('/', validateUserData, checkUniqueEmail,loginUser);

module.exports = router;
