import {Application} from 'express';

/**
 * Класс для доступа к экземпляру к текущему приложению экспресс
 */
export default class App  {
	constructor() {};

	private static instance: Application;

	public static get(): Application {
		if (!this.instance) {
			this.instance = require('express')();
		}

		return this.instance;
	}

	/** Регистрация роутингов. */
	public registerRoutes(): void {

	}
}
