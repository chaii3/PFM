import {Application} from 'express';
import {MongoClient} from 'mongodb';

/**
 * Класс для доступа к экземпляру к текущему приложению экспресс
 */
export default class App {
	constructor() {
	};

	private static instance: Application;

	private static mongoClient: MongoClient;

	public static get(): Application {
		if (!this.instance) {
			// init app
			this.instance = require('express')();

			this.instance.use(require('morgan')('combined'));
			this.instance.use(require('body-parser').json());
			this.instance.use(require('cors')());
			this.instance.use(require('passport').initialize());
			this.instance.use(require('passport').session());
		}

		return this.instance;
	}

	public static getMongo(): MongoClient {
		if (!this.mongoClient) {
			this.mongoClient = new MongoClient('', {
				useNewUrlParser: true,
			});
		}

		return this.mongoClient;
	}
}
