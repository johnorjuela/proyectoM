import 'dotenv/config';
import run from "./databases/connectoracle.js";
import express  from "express";
const app=express();

const PORT= process.env.PORT||3000;
app.listen(PORT, ()=> {
    console.log("Serve Run http://localhost:"+PORT);
})