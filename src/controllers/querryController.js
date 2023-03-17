import Querries from "../models/querry.js";
import failureMsg from "../utils/failureMsg.js";
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";

class querryController{
    //create a querry
    static async createQuerry(req, res){
        const { name, email, querry} = req.body;
        try {
            const newQuerry = await Querries.create({name, email, querry}) 
            const status = 201;
            const msg = "Querry Sent Successfully";
            const data = newQuerry;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        }
    }

    // get all querries     
    static async getQuerry(req, res){
        try {
            const querries = await Querries.find() 
            const status = 201;
            const msg = "All querries Created";
            const data = querries;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }
    // get one querry
    static async getonequerry(req, res){
        const { id } = req.params;
        try {
            const thequerry = await Querries.findOne({_id : id}) 
            if (!thequerry){
                const msg = `Id ${id} was not found`
                const status = 404;
                failureMsg(res, status, msg)
            }else{
                const status = 200;
            const msg = `getting one comment by id: ${id} successfully fetched`;
            const data = thequerry;
            successMsg(res, status, msg, data);

            }
            
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }

    
 //delete querry
 static async deletequerry(req, res){
    const { id } = req.params;
    const _id = id;
    try {
        await Querries.findByIdAndDelete(_id)
        res.status(200).json({
            message: "Deleted Successfully"
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
     
}
export default querryController;