import 'dotenv/config';
import "./databases/connectoracle.js";
import express  from "express";
import oracleRoute from "./routes/oracleroutes.js";
const app=express();

app.use(express.json());
app.use("/api/v1", oracleRoute)

const PORT= process.env.PORT||3000;
app.listen(PORT, ()=> {
    console.log("Serve Run http://localhost:"+PORT);
})