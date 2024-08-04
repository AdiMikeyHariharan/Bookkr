import jsonwebtoken from 'jsonwebtoken'

const cookieAuth =(req,res,next) =>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({permitted:false,message:'Unauthorized'})
    }
    try{
        const user = jsonwebtoken.verify(token,process.env.MY_SECRET);
        next();
    }
    catch (err) {
        res.clearCookie("token")
        return res.status(200).json({permitted:false,message : "Error Occured!!!"})
    }
}
export default cookieAuth;