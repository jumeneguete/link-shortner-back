import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import User from "./entities/User";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/home", async (req, res)=> {
    const users = await User.findAll();
    res.send(users);
});

export default app;
export async function init(){
    await connectDatabase();
}