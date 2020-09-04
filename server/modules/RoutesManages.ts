import {Application} from 'express';
import {AbstractRoute} from '../models/Application/InterfaceRoute';
import RouteApi from './API/RouteApi';
import App from './App';

/**
 * Класс для управления роунтингов приложения.
 */
export default class RoutesManager {
	private routes: AbstractRoute[] = [
		(new RouteApi()),
	];

	private api: RouteApi = new RouteApi();

	/** Регистрация всех роутов при инициализации. */
	public initRoutes(): void {
		const app: Application = App.get();

		this.routes.forEach((route: AbstractRoute) => {
			console.log('log');
			route.init();
		});
	}
}
