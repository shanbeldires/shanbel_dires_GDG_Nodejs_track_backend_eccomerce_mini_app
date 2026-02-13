import express from "express"
import { getCarts,creatCarts,updateCarts,deleteCartsById } from "../controllers/cartController.js"
const cartRoute =express.Router();
cartRoute.get("/",getCarts)
cartRoute.post("/",creatCarts)
cartRoute.put("/",updateCarts)
cartRoute.delete("/:id",deleteCartsById)
export default cartRoute;