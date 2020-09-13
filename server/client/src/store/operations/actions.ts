import {ActionTree} from 'vuex';
import ActionApiAuth from '../../../../modules/API/actions/ActionApiAuth';
import * as StoreOperations from '../models/Operations';
import {submitPayload} from '../models/types';

const actions: ActionTree<StoreState, any> = {
	 [StoreOperations.SUBMIT_AUTH]: async (context, data: submitPayload) => {
		const test = await fetch('/api/auth', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data),
		});

		 console.log(await test.json());
	}
};

export default actions;
