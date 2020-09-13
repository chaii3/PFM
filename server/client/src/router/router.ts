import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from '../components/Auth';

Vue.use(VueRouter);

const router: VueRouter = new VueRouter();

router.addRoutes([
	{
		component: Auth,
		path: '/auth',
	}
]);

export default router;
