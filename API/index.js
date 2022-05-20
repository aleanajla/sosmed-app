const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser')

const fs = require('fs')
const PORT = 2800

const app = express()

app.use(cors())
app.use(bodyParser())

const{userRouter} = require('./router')

app.use('/data', userRouter)


app.listen(PORT, () => console.log("Server Running at PORT :", PORT))