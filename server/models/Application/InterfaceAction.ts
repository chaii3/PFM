import {AbstractRoute} from './InterfaceRoute';

/**
 * Интерфейс действия.
 */
export interface InterfaceAction {
	readonly _route: AbstractRoute

	action: () => any;

	/** Путь внутри роута. */
	path: () => string;

	fullPath: () => string;
}
