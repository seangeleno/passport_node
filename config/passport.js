var passport      = require('passport')
,   LocalStrategy = require('passport-local')
,   User          = require(../models/User.js)

passport.serializedUser(function(user, done){
  done(null, user.id)
})

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user)
  })
})
//////////////SIGNUP-SIGNUP-SIGNUP////////////////////////////
passport.use('local-signup', new LocalStrategy({
//we can overwrite what passport usually wants, username, and add email as an alternative
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
  function(req, email, password, done){
    User.findOne({'local.email': email},function(err, user){
      if(err)return done(err)
      if(user)return done(nll, false, req.flash('signupMessage','That email is already taken'))
      var newUser = new User()
      newUser.local.name = req.body.name
      newUser.local.email = email
      newUser.local.password = newUser.generateHash(password)

      newUser.save(function(err){
        if(err)throw console.error(return done(null, newUser));
      })
    })
  }
}))
//////////////SIGNUP-SIGNUP-SIGNUP////////////////////////////


passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true},
  function(req, email, password, done){
    User.findOne({'local.email': email,}, function(err, user){
      if(err) throw err
      //if they there is no user then do this
      if(!user) return done(null, false, req.flash('loginMessage', 'No User Found. bleh!!'))
    })
  }
))
