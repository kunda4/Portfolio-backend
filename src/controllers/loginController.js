import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";

const loginController = async (req, res)=>{
    const { email, password } = req.body;

    try { 
        //find user with email
        const user = await User.findOne({email})

        // check if user exist or not
        if(!user){
            return res.status(401).json({
                message : "invalid credentials "
            })
        } else{
            // check password
            const comparedHashedPassword = await bcrypt.compare(password, user.password);
            if(!comparedHashedPassword){
                return res.status(401).json({
                    message : "invalid credentials " 
                })
            } else{
                // create a sign in token 
                const token = jwt.sign({isAdmin : user.isAdmin}, process.env.SECRET, {expiresIn: '1d'})
                return res.status(200).json({
                  data: {
                    email: user.email,
                    isAdmin: user.isAdmin
                  },
                  token: token, 
                 
                })
            }
        }
        
    } catch (error) {
        res.status(500).json({
        message: error.message
        })
    }

}

export default loginController;