import Portfolio from "../models/portfolio.js";
import failureMsg from "../utils/failureMsg.js";
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";


class portfoliosController{
    //create a Portfolio
    static async createPortfolio(req, res){
        const { title, imageUrl, description} = req.body;
        try {
            const newPortfolio = await Portfolio.create({title, imageUrl, description}) 
            const status = 201;
            const msg = "Portfolio created Successfully";
            const data = newPortfolio;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        }
    }

    // get all Portfolio
    static async getPortfolio(req, res){
        try {
            const portfolios = await Portfolio.find() 
            const status = 201;
            const msg = "All Portfolio Created";
            const data = portfolios;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }
    // get one portfolio
    static async getonePortfolio(req, res){
        const { id } = req.params;
        try {
            const portfolio = await Portfolio.findOne({_id : id}) 
            if (!portfolio){
                const msg = `Id ${id} was not found`
                const status = 404;
                failureMsg(res, status, msg)
            }else{
                const status = 200;
            const msg = `getting one blog by id: ${id} successfully fetched`;
            const data = portfolio;
            successMsg(res, status, msg, data);

            }
            
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }

    //update Portfolio
static async updatePortfolio(req, res){
    const{ title,  imageUrl, description } = req.body
    const { id } = req.params;
    const _id = id;
    try {
        const updatePortfolio = await Portfolio.findByIdAndUpdate(_id, { title, imageUrl, description }, {new: true})
        res.status(200).json({
            data: updatePortfolio
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
 //delete Portfolio
 static async deletePortfolio(req, res){
    const { id } = req.params;
    const _id = id;
    try {
        await Portfolio.findByIdAndDelete(_id)
        res.status(200).json({
            message: "Deleted Successfully"
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
     
}
export default portfoliosController;