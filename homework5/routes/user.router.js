const router = require('express').Router;

const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

router.get('/', userController.getAllOfUsers());
router.post('/', userMiddleware.createUser());
router.post('/:user_id', userController.updateUser());
router.delete('/:user_id', userController.deleteUser());

module.exports = router;
