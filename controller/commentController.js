const Comment = require('../model/comment')//user dfrom database from model-import comment from model

exports.creatComment = async (req,res)=>{
try {
    const {text} = req.body
    const {username} = req.username
    const comment = new Comment({text,username})
    await comment.save()
    res.status(201).json({message: "Comment created succesfully"})//201 create
} catch (error) {
    res.status(500).json({error: error.message}) //500 show error
}
}