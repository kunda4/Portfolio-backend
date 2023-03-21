import Blog from "../models/Blog.js";
import failureMsg from "../utils/failureMsg.js";
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";


class blogsController{
    //create a blog
    static async createBlog(req, res){
        const { name, author, description, imageUrl} = req.body;
        try {
            const newBlog = await Blog.create({name, description, author, imageUrl}) 
            const data = newBlog; 
            res.status(201).json({
                ok: true,
                message: "Blog created successfully",
                data: data
            
            });
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        }
    }

    // get all blog
    static async getBlog(req, res){
        try {
            const blogs = await Blog.find() 
            const status = 201;
            const msg = "All Blogs Created";
            const data = blogs;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }
    // get one blog
    static async getoneBlog(req, res){
        const { id } = req.params;
        try {
            const blog = await Blog.findOne({_id : id}) 
            if (!blog){
                const msg = `Id ${id} was not found`
                const status = 404;
                failureMsg(res, status, msg)
            }else{
                const status = 200;
            const msg = `getting one blog by id: ${id} successfully fetched`;
            const data = blog;
            successMsg(res, status, msg, data);

            }
            
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }

    //update blog
static async updateBlog(req, res){
    const{ name, description, author, imageUrl } = req.body
    const { id } = req.params;
    const _id = id;
    try {
        const updateBlog = await Blog.findByIdAndUpdate(_id, { name, description, author, imageUrl }, {new: true})
        res.status(200).json({
            data: updateBlog
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
 //delete blog
 static async deleteBlog(req, res){
    const { id } = req.params;
    const _id = id;
    try {
        await Blog.findByIdAndDelete(_id)
        res.status(200).json({
            message: "Deleted Successfully"
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
     
}
export default blogsController;