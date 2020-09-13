import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	template: `
	          <div class="app">
	          	<router-view></router-view>
			  </div>
      `,
	components: {
	},
})
export default class App extends Vue {
	public mounted(): void {
		console.log('log from root component');
	}
}
