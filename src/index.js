const express = require("express")
require('dotenv').config()
const { PORT } = require('./config/serverConfig')
const db = require('./models')

const bodyParser = require('body-parser')
const ApiRoutes = require("./routes/index");

const setUpAndStartServer = async ()=>{

    const app = express();
    const PORT = process.env.PORT
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}))
    app.use("/api",ApiRoutes);
    // db.sequelize.sync({ force: false, alter: true })
    app.listen(PORT,()=>{
        console.log(`Server is listening on ${PORT}`);
        
    })
}

setUpAndStartServer()
