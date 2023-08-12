import  express  from "express";
import userRoutes from "./routes/userRoutes"
import tweetRoutes from "./routes/tweetRoutes"

const app = express();
app.use(express.json())
app.use('/user',userRoutes)
app.use('/tweet',tweetRoutes)


app.get('/' ,(req,res)=>{
    res.send("Hellow")
})






app.listen(3000,()=>{
    console.log("Server Listening at localhost:3000")
})