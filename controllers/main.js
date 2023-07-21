const CustomAPIError=require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req,res)=>
{
    const{username,password}=req.body;

    if(!username|| !password){
        throw new CustomAPIError('Please provide email as well as the passowrd',400)
    }


    const id=new Date().getDate()

    const token=jwt.sign({id,username},process.env.jwtkey,{expiresIn:'30d'})
    res.status(200).json({msg:'User created',token})
}
 
const dashBoard= async (req,res)=>{
   
const lucky=Math.floor(Math.random()*100)
res.status(200).json({msg:`Hello, ${req.user.username}`, secret:`Here is your top secret data , and your number ${lucky}`})


}

module.exports={
    login,
    dashBoard
}



// Check username and pass in post request
// if exists create a jwt
// send it to frontend
// setup suth so only jwt can access the dashboard