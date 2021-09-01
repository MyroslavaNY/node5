const router = require('express').Router;

const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

router.get('/', userController.getAllOfUsers());
router.post('/', userController.createUser());
router.get('/', userMiddleware.checkUniqueEmail());
router.put('/:user_id', userMiddleware.updateOne());
router.delete('/:user_id', userMiddleware.deleteUser());

module.exports = router;
