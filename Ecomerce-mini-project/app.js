import express from "express"
import mongodb from "./config/mongodb.js"
import dotenv from "dotenv"
import productsRoute from "./routes/productsRoute.js"
import cartRoute from "./routes/cartRoute.js"
import ordersRoute from "./routes/ordersRoute.js"
import { errorHandler } from "./errorHandler/errorHandler.js"
dotenv.config()
mongodb()
const app =express()
app.use(express.json())
app.use("/products",productsRoute)
app.use("/cart",cartRoute)
app.use("/orders",ordersRoute)
app.use(errorHandler)


export default app;