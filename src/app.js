import express from 'express'

import cors from 'cors'
import cookiesParser from  'cookiesParser'

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentils: true

}))

app.use(express.json({limit: "16kb"}))  // setting configuration for json data
app.use(express.urlencoded({extended:true, limit: "16kb"})) // setting configuration for url data
app.use(express.static("public"))          // for static files




export {app}