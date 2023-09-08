var express = require('express');
var router = express.Router();

var employe = require('../controller/main.controller');
var auth = require('../controller/auth.controller');
var home = require('../controller/home.controller');

router.get('/',employe.list);
router.post('/save',employe.save);
router.get('/delete/:id',employe.delete);
router.get('/edit/:id',employe.edit);
router.post('/update',employe.update);


router.get('/register',auth.register);
router.post('/registerProcc',auth.registerProcc);

router.get('/login',auth.login);
router.post('/loginProcc',auth.loginProcc);

router.get('/home',home.home);

module.exports = router;