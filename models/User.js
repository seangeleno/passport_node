//user model
var mongoose       = require('mongoose')
,   bcrypt         = require('bcrypt-nodejs')
,   Schema         = mongoose.Schema

var userSchema = new Schema({
  local: {
    name:     String
,   email:    String
,   password: String
  }
,
  facebook: {
    id:    String
,   name:  String
,   token: String
,   email: String
  }
})
userSchema.methods.generatehash = function(password){
  return bcrypt.hashSynch(password, bcrypt.genSaltSync(12), null)
  //spits out jumbled line that we can store in mongodb
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSynch(password, this.local.password)
}

var User = mongoose.model('User', userSchema)

module.exports = User
