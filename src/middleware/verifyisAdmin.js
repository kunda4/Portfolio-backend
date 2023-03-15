import  jwt  from "jsonwebtoken";
const verifyisAdmin = (req, res, next)=>{

    //check if the request has authorisation folder
    const authHeader = req.headers.authorization;
    

    //condition
    if(!authHeader){
        return res.status(401).json({
            message: "No token provided"
        });
    } else{
        // get token
        const token = authHeader.split(" ") [1];
        console.log(token);

        try {
            const verifiedUser = jwt.verify(token, process.env.SECRET, {expiresIn: '1d'});
            if(!verifiedUser.isAdmin){
                return res.status(401).json({
                    message: "User not authorized"
                });
            }
            next();
            
        } catch (error) {
            res.status(500).json({
            message: error.message
            })
        }
    }


}
export default verifyisAdmin;