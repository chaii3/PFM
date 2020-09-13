import {InterfaceAction} from '../../models/Application/InterfaceAction';
import ActionApiAuth from './actions/ActionApiAuth';
import ActionApiInit from './actions/ActionApiInit';

export default class ControllerApi {
	public actionInit(): ActionApiInit {
		return new ActionApiInit();
	}

	public actionAuth(): ActionApiAuth {
		return new ActionApiAuth();
	}
}
