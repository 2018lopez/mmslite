const express = require('express'),
    PORT = 3004,
    bodyParser = require('body-parser'),
    server = express(),
    router = require('./router/router')
    cors = require('cors')
    
    

    server.use(bodyParser.json())
    .use(cors())
        .use('/api',router)
        .use(bodyParser.urlencoded({extended : true}))
        
        .listen(PORT,()=>console.log(
            `[+] server started on port ${PORT} 
            [http://localhost:${PORT}]`
        )
    )