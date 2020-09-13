import {GetterTree} from 'vuex';
import * as StoreOperations from '../models/Operations';

const getters: GetterTree<StoreState, any> = {
	[StoreOperations.GET_STATE_DATA]: (state) => () => {
		return state.storeData
	}
}

export default getters;
