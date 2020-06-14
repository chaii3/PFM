import {AbstractRoute} from '../../models/Application/InterfaceRoute';
import App from '../App';
import { Router } from 'express';
import ActionApiInit from './actions/ActionApiInit';
import ControllerApi from './ControllerApi';

/**
 * Роут для Api.
 */
export default class RouteApi extends AbstractRoute {
    public constructor() {
        super();
    }

    public app = App.get();
    public router = Router();

    private controller: ControllerApi = new ControllerApi();

    public getBase(): string {
        return '/api'
    }

    public init(): Router {
        this.router.get(this.controller.actionInit().path(), this.controller.actionInit().action());
        this.router.get('/', (req, res) => {
            res.send('privet')
        })
        console.log(11111);

        return this.router;
    }
}
