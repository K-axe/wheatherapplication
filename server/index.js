import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./dbConfig.js";
import cors from "cors"

const app = express();

//Env data
dotenv.config();
const port = process.env.PORT;



app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.static("public"));
app.use(cors());
const temp = {
    sender:"Server",
    message:"Hello From Server"
};
db.connect()
.then(()=>app.listen(port,()=>{
    console.log(`Server Running at port ${port}`);
}))
.catch((err)=> console.log(`${err} did not connect`));

app.get("/home",(req,res) =>{
    res.status(200).send(temp);
})
