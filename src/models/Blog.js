import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    name: {
         type: String,
         required: true,
         unique: true,
    },
    description: {
        type: String,
        required: true,
       
   },
   author: {
    type: String,
   

    },
    imageUrl: {
    type: String,
    required: true,
   
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;