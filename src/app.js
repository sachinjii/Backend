import express from "express"
import cors from cors
import cookieParser from cookieParser

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credential:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))

app.use(expree.static("public"))
app.use(cookieParser())

export {app};