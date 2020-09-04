import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import actions from './operations/actions';
import getters from './operations/getters';
import mutations from './operations/mutations';

Vue.use(Vuex);

const store: StoreOptions<StoreState> = {
	strict: true,
	state:  {
		storeData: 'data',
	},
	getters,
	mutations,
	actions,
}

export default new Vuex.Store(store);
