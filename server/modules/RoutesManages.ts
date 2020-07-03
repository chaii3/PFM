import App from './App';
import { Application, Router } from 'express';
import RouteApi from './API/RouteApi';

/**
 * Класс для управления роунтингов приложения.
 */
export default class RoutesManager {
	private static api: RouteApi = new RouteApi();

	/** Регистрация всех роутов при инициализации. */
	public static initRoutes(): void {
		const app: Application = App.get();

		app.use(this.api.getBase(), this.api.init());
	}
}
