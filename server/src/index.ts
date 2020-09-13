import {Application} from 'express';
import ServerConfig from '../config/server-config';
import App from '../modules/App';

const EXPRESS = require('express');
const config  = ServerConfig.getInstance();

const app: Application = App.get();

App.initDbConnection(() => {
	app.listen(config.port, () => {
		console.log('server is ok', config.port);
	});
});

app.use('/', EXPRESS.static(__dirname + '/dist'));

App.routesManager().initRoutes();

