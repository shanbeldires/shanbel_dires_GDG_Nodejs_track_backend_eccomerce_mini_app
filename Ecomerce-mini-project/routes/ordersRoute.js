import express from "express"
import { getOrders,getOrdersById,creatOrders } from "../controllers/ordersController.js"
const ordersRoute =express.Router();
ordersRoute.get("/",getOrders)
ordersRoute.get("/:id",getOrdersById)
ordersRoute.post("/",creatOrders)
export default ordersRoute;