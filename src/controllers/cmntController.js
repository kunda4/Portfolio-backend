import Comment from "../models/Comment.js";
import failureMsg from "../utils/failureMsg.js";
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";

class cmntController{
    //create a comment
    static async createCmnt(req, res){
        const { name, comment} = req.body;
        try {
            const newCmnt = await Comment.create({name, comment}) 
            const status = 201;
            const msg = "Comment created Successfully";
            const data = newCmnt;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        }
    }

    // get all blog
    static async getCmnt(req, res){
        try {
            const comments = await Comment.find() 
            const status = 201;
            const msg = "All Comments Created";
            const data = comments;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }
    // get one blog
    static async getoneCmnt(req, res){
        const { id } = req.params;
        try {
            const comment = await Comment.findOne({_id : id}) 
            if (!comment){
                const msg = `Id ${id} was not found`
                const status = 404;
                failureMsg(res, status, msg)
            }else{
                const status = 200;
            const msg = `getting one comment by id: ${id} successfully fetched`;
            const data = comment;
            successMsg(res, status, msg, data);

            }
            
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }

    
 //delete blog
 static async deleteCmnt(req, res){
    const { id } = req.params;
    const _id = id;
    try {
        await Comment.findByIdAndDelete(_id)
        res.status(200).json({
            message: "Deleted Successfully"
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
     
}
export default cmntController;