const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bcrypt = require('bcryptjs')
require('dotenv').config()
const cors = require('cors')// we do this to bring cors to the project

// const session = require('sesssion')//security to autorize user
const localStrategy = require('passport-local').Strategy


const app = express()
app.use(express.json())
app.use(cors())

// start server
const port = process.env.PORT
app.listen(port,()=>console.log(`server is runing on port ${port}`))

