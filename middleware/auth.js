const CustomAPIError=require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const authenticationMiddleware=(req,res,next)=>{
    // console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer '))
    {
        throw new CustomAPIError('No token provided',401)
    }


const token=authHeader.split(' ')[1]

try {
    const decoded=jwt.verify(token,process.env.jwtkey)
   const{id,username}=decoded
   req.user={id,username}
    next()
} catch (error) {
    throw new CustomAPIError('Not Authorized to access',401)
}
}
  

module.exports=authenticationMiddleware