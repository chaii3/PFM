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
	console.log('privet', 'до кодирование');
	console.log(test);
	console.log('обратно')
	console.log(Crypto.AES.decrypt(test, 'key').toString())
	// const collection: Collection = client.db('test').collection('users');
	// console.log(client.db('test').collection('users'));
	// client.db('test').collection('users').findOne({}, (err, doc) => {
	// 	console.log(doc.name);
	// });
});

app.use('/', EXPRESS.static(__dirname + '/dist'));

RoutesManager.initRoutes();

