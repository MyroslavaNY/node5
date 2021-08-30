const router = require('express').Router();

const {userController} = require('../controllers');
// const {userMiddleware} = require('../middlewares');

router.get('/', userController.getAllOfUsers);
router.post('/', userController.createUser);

// router.get('/:user_id', userController.getUserById);   // TODO дороби отримання одного користувача
// router.put('/:user_id', userController.updateUser);    // PUT or PATCH на оновлення диних
// router.delete('/:user_id', userController.deleteUser);

module.exports = router;
