import { Response, Request } from "express";
import {InterfaceAction} from '../../../models/Application/InterfaceAction';
import {AbstractRoute} from '../../../models/Application/InterfaceRoute';
import RouteApi from '../RouteApi';

export default class ActionApiInit implements InterfaceAction{
	public readonly _route: AbstractRoute = new RouteApi();

    public action(): any {
        return (req: Request, res: Response) => {
            res.send('init Action');
        }
    }

    /** Путь внутри роута. */
    public path(): string {
        return '/init'
    }

    public fullPath(): string {
		return this._route.getBase() + this.path();
    }
}
