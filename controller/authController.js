//manage log in

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/user')//user dfrom database from model

async function login(req,res){
  try {
    const {username,password} = req.body
    const user = await User.findOne({username})
    //below if user not exist we return 401
    //check if user is the right person
    if(!user){
        return res.status(401).json({message: "Invalid User Name"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
      return res.status(401).json({message: "Invalid User Name or Password"})
    }
    const token = jwt.sign({userID: user.id},process.env.JWT_SECRET)//user from line 10
res.json({token})

  } catch (error) {
    res.status(500).json({error: error.message })

  }
}
model.exports = {login}




// object error - property -message password book
// {
//   error;{
//     message:'hello',
//     password: '1234',
//     book:'ab123'
//   }
// }