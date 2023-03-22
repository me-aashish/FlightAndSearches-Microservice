const express = require("express")
require('dotenv').config()
const { PORT } = require('./config/serverConfig')



const setUpAndStartServer = async ()=>{

    const app = express();
    const PORT = process.env.PORT

    app.listen(PORT,()=>{
        console.log(`Server is listening on ${PORT}`);
        
    })
}

setUpAndStartServer()
