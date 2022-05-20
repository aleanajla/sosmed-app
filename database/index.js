const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const PORT = 3300

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'alea',
    password: 'Alea120802',
    database: 'db_socialmedia',
    port: 3306,
    multipleStatements: true
})

db.connect((err)=>{
    if(err){
        return console.error(`error: ${err.message}`);
    }
    console.log("Connected to MySQL Server")
})

app.get('/',(req, res)=> {
    res.status(200).send('<h4>integrated mysql with express</h4>')
})

app.listen(PORT, ()=> console.log('API Running: ', PORT))