import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from './config/Database.js';
import router from "./routes/index.js";
import cors from "cors";
// import Users from "./models/UserModels.js"; untuk import table 
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('database connected');
    // await Users.sync(); untuk import table 
} catch (error) {
    console.error(error);
}
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000,()=> console.log('server running port 5000'))