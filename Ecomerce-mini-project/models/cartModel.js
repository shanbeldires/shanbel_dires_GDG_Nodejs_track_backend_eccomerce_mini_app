import mongoose from "mongoose";
const cartSchema=new mongoose.Schema({
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    
    },ordered: {
        type: Boolean,
        default: false
    }

},
    {
        timestamps:true
    }
)
const cart=mongoose.model("cart",cartSchema)
export default cart;