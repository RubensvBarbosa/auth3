const router = require('express').Router();
const protectedController = require('../controllers/protected-controller');
const auth = require('../controllers/auth-controller');

router.get("/", auth, protectedController.protected);

module.exports = router;