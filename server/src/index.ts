import { Application, Request, Response } from "express";
import ServerConfig from "../config/config";

const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');
const MORGAN = require('morgan');
const config = ServerConfig.getInstance();

const app: Application = EXPRESS();
app.use(MORGAN('combined'))
app.use(BODY_PARSER.json())
app.use(CORS())

app.listen(config.port, () => {
    console.log('server is ok', config.port);
})

app.use('/', EXPRESS.static(__dirname + '/dist'))

