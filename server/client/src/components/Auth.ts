import Vue from 'vue';
import Component from 'vue-class-component';
import * as StoreOperations from '../store/models/Operations';
import {submitPayload} from '../store/models/types';

@Component({
	template: `
				  <section class="auth">
					  <h2 class="auth__header">Авторизация</h2>
					  <div class="auth__inputs">
						  <input v-model="name" type="text" placeholder="Ваше имя" class="base-input">
						  <input v-model="password" type="password" placeholder="Пароль" class="base-input">
					  </div>
					  <div @click="submit" class="auth__submit-button">Подтвердить</div>
				  </section>
	          `,
})
export default class Auth extends Vue {
	private name: string     = '';
	private password: string = '';

	private submit(): void {
		this.$store.dispatch(StoreOperations.SUBMIT_AUTH,
			<submitPayload> {
				name:     this.name,
				password: this.password
			});
	}
}
