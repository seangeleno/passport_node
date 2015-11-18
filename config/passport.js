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
