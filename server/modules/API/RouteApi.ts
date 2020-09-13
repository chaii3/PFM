import {Router} from 'express';
import {InterfaceAction} from '../../models/Application/InterfaceAction';
import {AbstractRoute} from '../../models/Application/InterfaceRoute';
import App from '../App';
import ControllerApi from './ControllerApi';

/**
 * Роут для Api.
 */
export default class RouteApi implements AbstractRoute {
	private controller: ControllerApi = new ControllerApi();
    private app = App.get();

	public router = Router();

    public getBase(): string {
        return '/api'
    }

    public init(): void {
        this.router.get(this.controller.actionInit().path(), this.controller.actionInit().action());

        this.router.post(this.controller.actionAuth().path(), this.controller.actionAuth().action());


		App.get().use(this.getBase(), this.router);
    }
}
