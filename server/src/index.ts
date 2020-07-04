import {Application, Request, Response} from 'express';
import {Collection, Db, MongoClient, MongoError} from 'mongodb';
import ServerConfig from '../config/config';
import App from '../modules/App';
import RoutesManager from '../modules/RoutesManages';
import * as Crypto from 'crypto-js';

const EXPRESS = require('express');
const config  = ServerConfig.getInstance();

const app: Application = App.get();
const client           = App.getMongo();

client.connect((error: MongoError, client: MongoClient) => {
	if (error) {
		console.log(error);
	}

	app.listen(config.port, () => {
		console.log('server is ok', config.port);
	});
	console.log('Начинаю криптокодирование');
	const test = Crypto.AES.encrypt('privet', 'key').toString();
	const db: Collection = client.db('PFMDB').collection('users');
	db.find().toArray((err, doc) => {
		console.log(doc);
	})
});

app.use('/', EXPRESS.static(__dirname + '/dist'));

RoutesManager.initRoutes();

