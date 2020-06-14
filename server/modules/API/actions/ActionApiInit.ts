import { Response, Request } from "express";

export default class ActionApiInit {
    public action() {
        return (req: Request, res: Response) => {
            res.send('init Action');
        }
    }

    /** Путь внутри роута. */
    public path() {
        return '/init'       
    }
}