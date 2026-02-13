import app from "./app.js"
const Port=process.env.PORT ||3000
app.listen(Port,()=>{
   console.log(`server is running on port http://localhost:${Port}`)
})