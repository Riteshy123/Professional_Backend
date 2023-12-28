import express from 'express'

import cors from 'cors'
import cookieParser from  'cookie-parser'


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentils: true

}))

app.use(express.json({limit: "16kb"}))  // setting configuration for json data
app.use(express.urlencoded({extended:true, limit: "16kb"})) // setting configuration for url data
app.use(express.static("public"))          // for static files
app.use(cookieParser())

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration 
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

export {app}