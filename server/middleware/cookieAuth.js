import jsonwebtoken from 'jsonwebtoken'

exports.cookieAuth =(req,res,next) =>{
    const token = req.cookies.token
    try{
        const user = jsonwebtoken.verify(token,process.env.MY_SECRET);
        res.status(200).json({permitted:true})
    }
    catch (err) {
        res.clearCookie("token")
        res.status(200).json({permitted:false})
    }
}