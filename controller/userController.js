const User = require('../model/user')
const bcrypt = require('bcrypt')
//bcypt hide password

//request and response
const register = async (req,res)=>{
    try {
    const {username,password} = req.body    
    const hashedPassword = await bcrypt.hash(password,10)//take user enter email and password for security ex look bcrypt hash on google
    const user = new User({username,password: hashedPassword})
    await user.save()
    res.status(201).json({message:"User reigister successfully"})

    // 201 — Created: It is typically created after a successful POST request.
    //  It means that the request was successful and a new resource was created.
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {register}
