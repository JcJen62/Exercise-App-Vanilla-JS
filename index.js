import express from 'express'
import path from "path";
import apiRouter from './routes/api.routes.js';
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { port, mongoUri } from './config.js'

dotenv.config()

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const app = express();

app.use(express.static('public'))
app.use(express.json())
app.use("/api", apiRouter)
app.use((req, res, next) =>{
    res.status(404).json({
        Message: "route not found."
    })
})

app.use(express.urlencoded({extended:true}))

mongoose.connect(`${mongoUri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
    })
})
