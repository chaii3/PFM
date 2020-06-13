import App from '../modules/App';

/**
 * Класс для управления роунтингов приложения.
 */
export default class RoutesManager {
	/** Регистрация всех роутов при инициализации. */
	public static initRoutes(): void {
		const app: App = App.get();
	}
}
