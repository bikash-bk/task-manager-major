const express = require("express")
const cors = require('cors')
require('dotenv').config();
const ConnectDB = require('./db/Db')



const app = express()

ConnectDB();


app.use(express.json())

app.use(cors({
    origin: process.env.FRONT_END_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)


app.listen(3000,(()=>{
    console.log("server is ruuning on port 3000")
}))