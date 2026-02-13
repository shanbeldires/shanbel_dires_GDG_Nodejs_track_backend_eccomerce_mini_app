import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
    price:{
        type:Number,
        required:true,
        min:0
        },
    description:{
        type:String,
        required:true
        
      },
      
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,  
        required:true
    },
    stock:{
        type:Number,
        required:true,
        min:0
    }
      
    },

    { 
        timestamps:true
    }
)
const product=mongoose.model("product",productSchema)
export default product;