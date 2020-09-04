import {Application} from 'express';
import RoutesManager from './RoutesManages';

/**
 * Класс для доступа к экземпляру к текущему приложению экспресс
 */
export default class App {
	constructor() {
	};

	private static instance: Application;
	private static routeManager: RoutesManager;

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

	public static routesManager(): RoutesManager {
			if (!this.routeManager) {
				this.routeManager = new RoutesManager();
			}

			return this.routeManager;
	}
}
