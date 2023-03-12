import Book from "../models/Book.js";
import failureMsg from "../utils/failureMsg.js";
import serverError from "../utils/serverError.js";
import successMsg from "../utils/successMsg.js";


class booksController{
    //create a book
    static async createBook(req, res){
        const { name, author, description, imageUrl} = req.body;
        try {
            const newBook = await Book.create({name, description, author, imageUrl}) 
            const status = 201;
            const msg = "Book created Successfully";
            const data = newBook;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        }
    }

    // get all book
    static async getBook(req, res){
        try {
            const books = await Book.find() 
            const status = 201;
            const msg = "All Books Created";
            const data = books;
            successMsg(res, status, msg, data);
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }
    // get one book
    static async getoneBook(req, res){
        const { id } = req.params;
        try {
            const book = await Book.findOne({_id : id}) 
            if (!book){
                const msg = `Id ${id} was not found`
                const status = 404;
                failureMsg(res, status, msg)
            }else{
                const status = 200;
            const msg = `getting one book by id: ${id} successfully fetched`;
            const data = book;
            successMsg(res, status, msg, data);

            }
            
            
        } catch (error) {
           const errorMsg = error.message
            serverError(res, errorMsg); 
        } 
    }

    //update book
static async updateBook(req, res){
    const{ name, description, author, imageUrl } = req.body
    const { id } = req.params;
    const _id = id;
    try {
        const updateBook = await Book.findByIdAndUpdate(_id, { name, description, author, imageUrl }, {new: true})
        res.status(200).json({
            data: updateBook
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
 //delete book
 static async deleteBook(req, res){
    const { id } = req.params;
    const _id = id;
    try {
        await Book.findByIdAndDelete(_id)
        res.status(200).json({
            message: "Deleted Successfully"
        })
        
    } catch (error) {
        const errorMsg = error.message
            serverError(res, errorMsg); 
    }
}
     
}
export default booksController;