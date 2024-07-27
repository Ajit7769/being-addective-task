const express = require('express')
const cors = require('cors')
const db_Connection = require('./utils/db.js')
const router = require('./Routers/Routes.js')
// const bodyparser = require('body-parser')

const app = express();


app.use(cors());

app.use(express.json());

app.get(db_Connection)

app.use('/api' , router)


app.listen(8080 , (() =>{
    console.log("Server is running on port 8080");
}))