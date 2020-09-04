import {ActionTree} from 'vuex';
import * as StoreOperations from '../models/types';

const actions: ActionTree<StoreState, any> = {
	[StoreOperations.GET_STATE_DATA]: () => {
		console.log('this is action!!!');
	}
}

export default actions;
