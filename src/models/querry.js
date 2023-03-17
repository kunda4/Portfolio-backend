import mongoose from "mongoose";

const querrySchema = new mongoose.Schema({
    name: {
         type: String,
         required: true,
         unique: true,
    },
    email: {
        type: String,
        required: true,
       
   },
   querry: {
    type: String,
    required: true,
   
}
   
})

const Querries = mongoose.model("Querries", querrySchema);

export default Querries;