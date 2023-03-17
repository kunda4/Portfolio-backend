import mongoose from "mongoose";

const cmntSchema = new mongoose.Schema({
    name: {
         type: String,
         required: true,
         unique: true,
    },
    comment: {
        type: String,
        required: true,
       
   },
   createdAt:{
     type: Date,
     default: Date.now

   }
   
})

const Comment = mongoose.model("Comment", cmntSchema);

export default Comment;