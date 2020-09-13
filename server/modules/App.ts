import {Application} from 'express';
import {Client} from 'pg';
import {ModelCtor, Sequelize, SequelizeOptions} from 'sequelize-typescript';
import Users from './API/DataBase/Users/Users';
import RoutesManager from './RoutesManages';

/**
 * Класс для доступа к экземпляру к текущему приложению экспресс
 */
export default class App {
	constructor() {
	};

	private static instance: Application;
	private static routeManager: RoutesManager;
	private static pg: Client;
	private static sequelize: Sequelize;

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

	public static initDbConnection(successCb: () => void): void {
		if (!this.pg) {
			this.pg = new Client({
				user:     'postgres',
				host:     'localhost',
				database: 'pfm',
				port:     5432,
				password: '123',
			});

			this.sequelize = new Sequelize('postgresql://localhost:5432/pfm', {
				dialect:  'postgres',
				username: 'postgres',
				host:     'localhost',
				database: 'pfm',
				port:     5432,
				password: '123',
			});

			this.sequelize.addModels([
				Users,
			]);
		}

		this.pg.connect()
			.then((r) => {
				console.log(r, 33);
				successCb();
			})
			.catch(() => {
				console.log('Не могу подключиться к базе.');
			});

	}

	public static routesManager(): RoutesManager {
		if (!this.routeManager) {
			this.routeManager = new RoutesManager();
		}

		return this.routeManager;
	}
}
