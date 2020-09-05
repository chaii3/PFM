import Vue from 'vue';
import VueRouter from 'vue-router';
import Child from '../components/child';

Vue.use(VueRouter);

const router: VueRouter = new VueRouter();

router.addRoutes([
	{
		component: Child,
		path: '/child'
	}
]);

export default router;
