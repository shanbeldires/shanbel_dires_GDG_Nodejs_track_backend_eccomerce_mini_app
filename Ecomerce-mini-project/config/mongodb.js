import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const mongodb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDb is connected")
    }
    catch(error){
        console.log("Database connection is failed",error)
    }
}
export default mongodb;