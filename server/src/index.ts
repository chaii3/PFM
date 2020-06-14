import {Application, Request, Response} from 'express';
import {MongoClient, MongoError} from 'mongodb';
import ServerConfig from '../config/config';
import App from '../modules/App';
import RoutesManager from '../modules/RoutesManages';

const EXPRESS                  = require('express');
const BODY_PARSER              = require('body-parser');
const cors                     = require('cors');
const morgan                   = require('morgan');
const config                   = ServerConfig.getInstance();

const app: Application = App.get();

const client = new MongoClient('mongodb://localhost:27017/', {
	useNewUrlParser: true,
});

client.connect((error: MongoError, client: MongoClient) => {
	if (error) {
		console.log(error);
	}

	app.listen(config.port, () => {
		console.log('server is ok', config.port);
	});
});

app.use(morgan('combined'));
app.use(BODY_PARSER.json());
app.use(cors());

app.use('/', EXPRESS.static(__dirname + '/dist'));

app.get('/test', (req: Request, res: Response) => {
	res.send('test is ok');
});

RoutesManager.initRoutes();

