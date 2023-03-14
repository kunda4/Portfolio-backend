import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    title: {
         type: String,
         required: true,
         unique: true,
    },
    imageUrl: {
        type: String,
        required: true,
       
        },
    description: {
        type: String,
        required: true,
       
   },
  
   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;