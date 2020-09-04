import {Router} from 'express';

/**
 * Интерфейс для класса роута.
 */
export interface AbstractRoute {

    /** Экземпляр объекта роута для инициализации. */
    router: Router;

    /** Получить основание для роута. */
    getBase: () => string;

    /** Инициализация экшенов. */
    init: () => void;
}
