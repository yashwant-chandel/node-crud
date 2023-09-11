var express = require('express');
var router = express.Router();

var employe = require('../controller/main.controller');
var auth = require('../controller/auth.controller');
var home = require('../controller/home.controller');
var admin = require('../controller/admin.controller');

var login = require('../middleware/isUser.middleware');
var validator = require('../validations/AuhtValidator.validation');
var session = require('express-session');
router.use(session({secret:"sessionsecret",resave: false,saveUninitialized: true}));
router.get('/',employe.list);
router.post('/save',employe.save);
router.get('/delete/:id',employe.delete);
router.get('/edit/:id',employe.edit);
router.post('/update',employe.update);


router.get('/register',auth.register);
router.post('/registerProcc',validator.register,auth.registerProcc);

router.get('/login',auth.login);
router.post('/loginProcc',auth.loginProcc);

router.get('/home',login.isLogin,home.home);

router.get('/admin-dahsbord',admin.home);

module.exports = router;