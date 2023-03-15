import User from "../models/user.js";
import failureMsg from "../utils/failureMsg.js";
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";
import bcrypt from "bcrypt";

export const registerController = async (req, res)=>{

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
// get all user
export const getUser = async(req, res)=>{
    try {
        const users = await User.find() 
        const status = 201;
        const msg = "All Users Created";
        const data = users;
        successMsg(res, status, msg, data);
        console.log(users); 
    }
    
    catch (error) {
       const errorMsg = error.message
        serverError(res, errorMsg); 
    } 
}
// get one user
export const getoneUser = async(req, res)=>{
    const { id } = req.params;
    try {
        const user = await User.findOne({_id : id}) 
        if (!user){
            const msg = `Id ${id} was not found`
            const status = 404;
            failureMsg(res, status, msg)
        }else{
            const status = 200;
        const msg = `getting one user by id: ${id} successfully fetched`;
        const data = user;
        successMsg(res, status, msg, data);

        }
        
        
    } catch (error) {
       const errorMsg = error.message
        serverError(res, errorMsg); 
    } 
}

//update user
export const updateUser = async(req, res)=>{
const{ FullName, email, password : hashedPassword, isAdmin } = req.body
const { id } = req.params;
const _id = id;
try {
    const updateUser = await User.findByIdAndUpdate(_id, { FullName, email, password : hashedPassword, isAdmin}, {new: true})
    res.status(200).json({
        data: updateUser
    })
    
} catch (error) {
    const errorMsg = error.message
        serverError(res, errorMsg); 
}
}
//delete User
export const deleteUser= async(req, res)=>{
const { id } = req.params;
const _id = id;
try {
    await User.findByIdAndDelete(_id)
    res.status(200).json({
        message: "Deleted Successfully "
    })
    
} catch (error) {
    const errorMsg = error.message
        serverError(res, errorMsg); 
}
}
