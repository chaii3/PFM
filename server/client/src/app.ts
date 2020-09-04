import Vue from 'vue';
import Component from 'vue-class-component';
import Child from './components/child';

@Component({
	template: `
	          <div>
	          	Component Text
              	<Child/>
              </div>
      `,
	components: {
		Child,
	},
})
export default class App extends Vue {
	public mounted(): void {
		console.log('log from root component');
	}
}
