import {MutationTree} from 'vuex';
import * as StoreOperations from '../models/types';

const mutations: MutationTree<StoreState> = {
	[StoreOperations.SET_STATE_DATA]: (state, payload: string) => {
		state.storeData = payload;
	}
}

export default mutations;
