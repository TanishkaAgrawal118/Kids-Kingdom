import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { configureDb } from "./src/configs/DbConfig.js";
// import multer from "multer";
import resultRouter from "./src/routers/router.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use(resultRouter);

app.listen(process.env.PORT, ()=>{
    configureDb();
    console.log(`listening on port ${process.env.PORT}`)
});

