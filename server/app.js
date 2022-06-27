

// modules
const next = require('next');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');

// socket methods
const onConnection = require('./socketLib/onConnection');

// server's dependencies
const expressApp = express();
const server = http.createServer(expressApp)



const io = require('socket.io')( server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        
    }
})

dotenv.config()

const dev = process.env.NODE_ENV !== 'development';

const app = next({ dev });

// nextjs request handler to serve static files for the react frontend
const handler = app.getRequestHandler();

const _port = 3000;



app.prepare().then( async () => {

    expressApp.use(cors())

    io.use(( socket, next ) => {
        next()
    });


    expressApp.use(cookieParser(process.env.SECRET))

    expressApp.get('*', ( req, res ) => {
        return handler(req, res) 
    });




    io.on('connection', ( socket ) => onConnection( socket, io ))

    server.listen( _port, () => {
        console.log('server listening for request...')
    })

})