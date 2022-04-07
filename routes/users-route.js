const router = require('express').Router();

const usersController = require('../controllers/users-controller');


router.get('/', usersController.list);
router.post('/', usersController.create);
router.put('/{id}', usersController.update);

module.exports = router;