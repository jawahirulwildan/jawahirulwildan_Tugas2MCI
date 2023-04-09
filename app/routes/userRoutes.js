const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/get', userController.getAllUser);
router.get('/get/:u_name', userController.getAllUserByName);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);
module.exports = router;