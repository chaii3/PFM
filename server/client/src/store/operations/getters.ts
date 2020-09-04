import {GetterTree} from 'vuex';
import * as StoreOperations from '../models/types';

const getters: GetterTree<StoreState, any> = {
	[StoreOperations.GET_STATE_DATA]: (state) => () => {
		return state.storeData
	}
}

export default getters;
