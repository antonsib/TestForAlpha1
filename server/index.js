require('dotenv').config()
const express=require('express')
const PORT=process.env.PORT
const cors = require('cors')
const router = require('./routes/index')

const app=express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


app.listen(PORT,()=>{console.log("Server started on port:"+PORT)})