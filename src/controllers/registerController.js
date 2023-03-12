import User from "../models/user.js";
import bcrypt from "bcrypt";

const registerController = async (req, res)=>{

    const {FullName, email, password, isAdmin} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({FullName, email, password : hashedPassword, isAdmin})
        res.status(201).json({
            message: "New User Created Successfully",
            data: newUser
        });
        
    } catch (error) {
        console.log(error.code);
        if( error.code === 11000){
            res.status(403).json({
                message: "Email is already exist"
            })
        }
        res.status(500).json({
        message: error.message
        })
        
    }


}
export default registerController