var express = require('express');
var userDao = require('../dao/userDao');
var router = express.Router();
var log = require('log4js').getLogger("index");

/*以下是路由配置*/

/* GET home page. */
router.get('/',checkLogin);
router.get('/', function(req, res, next) {
	posts = [];
	// res.render('index',{
	// 		title:'首页',
	// 		posts:posts,
	// 		user: req.session.user,
	//         success : req.flash('success').toString(),
	//         error : req.flash('error').toString()
	// 	})
    res.render('main/index');
});

// router.get('/login',checkNotLogin);
router.get('/login',function(req,res,next){
	console.log("app.usr local");
  	res.locals.message = '';
  	var err = req.session.error;
	delete req.session.error;
  	if (err) res.locals.message = '<div class="alert alert-error">' + err + '</div>';
	res.render('login/login');
});

router.get('/found',function(req,res,next){
	res.render('found/found');
});

router.get('/guangzhu',function(req,res,next){
	res.render('guangzhu/guanzhu');
});

router.get('/register',function(req,res,next){
	res.render('register',{title:'用户注册'});
});

router.get('/home',function(req,res,next){
	console.log('ok');
	var user = {
		username : 'admin',
		password : 'admin'
	}
	res.locals.user = req.session.user;
	log.debug(res.locals.user);
	res.redirect('/');
});


router.get("/logout", checkLogin);
router.get('/logout',function(req,res,next){
	req.session.user=null;
	req.flash('success', '退出成功');
	res.redirect('/');
});

/*路由配置end*/


//请求配置
router.post('/login',checkNotLogin);
router.post('/login',function(req,res,next){
	userDao.queryById(req, res, next);
});

router.post('/register',function(req,res,next){
	userDao.add(req, res, next);
});
// 检查用户登录状态
function checkNotLogin(req,res,next){
	if(req.session.user){
		req.flash('error','用户已经登录');
		return res.redirect('/');
	}
	next();
}

function checkLogin(req,res,next){
	log.debug(req.session.user);
	if(!req.session.user){
		console.log(req.session.user);
		req.flash('error','用户未登录');
		return res.redirect('/login');
	}
	next();
}
module.exports = router;


