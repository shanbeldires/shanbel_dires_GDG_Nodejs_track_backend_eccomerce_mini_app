import express from "express"
import { getProducts,getProductsById,createProducts,updateProductsById,deleteProductsById } from "../controllers/productsController.js"    
const productsRoute=express.Router()
productsRoute.get("",getProducts)
productsRoute.get("/:id",getProductsById)
productsRoute.post("/",createProducts)
productsRoute.put("/:id",updateProductsById)
productsRoute.delete("/:id",deleteProductsById)

export default productsRoute;