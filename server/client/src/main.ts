import App from './app';
import router from './router/router';
import store from './store/store';

new App({
	el: '#app',
	store,
	router,
});
