const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel')

const protect = asyncHandler(async (req, res, next) => {

     let token = 'token'

     if(req.headers.authorization && 
          req.headers.authorization.startsWith('Bearer')){
          try{
               // get the token from header
               token = req.headers.authorization.split(' ')[1]

               //verify the token
               const decoded = jwt.verify(token, process.env.JWT_SECRET)

               //Get user from the token
               // @ts-ignore
               req.user = await User.findById(decoded.id).select('-password')
               next()
          }catch(e){
               console.log(e)
               res.status(401)
               throw new Error('Not Authorized')
          }
     }

     if (!token) { 
          res.status(401)
          throw new Error('Not authorization, no token')
     }

})

module.exports = {protect}