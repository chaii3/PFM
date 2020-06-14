import { Application, Router } from "express";
import App from "../../modules/App";

/**
 * Интерфейс для класса роута.
 */
export abstract class AbstractRoute {
    /** Экземпляр приложения */
    abstract app: Application = App.get();

    /** Экзeмплярп объекта роута для инициализации. */
    abstract router: Router = Router();

    /** Получить основание для роута. */
    abstract getBase(): void;

    /** Инициализация экшенов. */
    abstract  init(): void;
}
