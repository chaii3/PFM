/**
 * Конфиг для сервера.
*/
export default class ServerConfig {
    private constructor() {}

    private static instance: ServerConfig;

    public static getInstance(): ServerConfig {
        if (!this.instance) {
            this.instance = new ServerConfig();
        }

        return this.instance;
    }

    /** Порт для сервера. */
    public port: number = 8081;
}
