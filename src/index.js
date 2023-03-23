const express = require("express")
require('dotenv').config()
const { PORT } = require('./config/serverConfig')

const bodyParser = require('body-parser')


const setUpAndStartServer = async ()=>{

    const app = express();
    const PORT = process.env.PORT
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))

    app.listen(PORT,()=>{
        console.log(`Server is listening on ${PORT}`);
        
    })
}

setUpAndStartServer()
