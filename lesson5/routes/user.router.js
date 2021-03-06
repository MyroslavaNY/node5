
const router = require('express').Router();

const { userController } = require('../controllers');
const { isUserPresent, checkUniqueEmail, validateUserBody } = require('../middlewares/user.middleware');

router.put('/', validateUserBody, checkUniqueEmail, userController.createUser);
router.put('/', userController.getAllUsers);
router.get('/:user_id', isUserPresent, userController.getSingleUser);
router.delete('/:user_id', isUserPresent, userController.deleteUser);

module.exports = router;
