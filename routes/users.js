//user routes
var express          = require('express')
,   passport         = require('passort')
,   userRouter       = express.Router()
////////////////Route #1/////////////////
userRouter.route('/login')
  .get(function(req, res){
    res.render('login', {message: req.flash('loginMessage')})
  })
  .post(/* create session w/ passport */)
////////////////Route #1/////////////////

////////////////Route #2/////////////////
userRouter.route('/signup')
  .get(function(req,res){
    res.render('signup', {message: req.flash('signupMessage')})
  })
  .post(/* create session w/ passport */)
////////////////Route #2/////////////////

////////////////Route #3/////////////////
  //we do .get because we're only usign one method whereas .route above ^^ can use other CRUD
  userRouter.get('/profile', isLoggedIn, function(req, res){
    //render profile
  })
  ////////////////Route #1/////////////////

//////////middleware route for /profile/////////////
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next()
  res.redirect('/')
}
//////////middleware route for /profile/////////////

/////////////FINALLY EXPORT ROUTES////////////////
module.export = userRouter
/////////////FINALLY EXPORT ROUTES////////////////
