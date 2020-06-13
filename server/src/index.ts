import {Application, Request, Response, Router} from 'express';
import ServerConfig from '../config/config';

const EXPRESS     = require('express');
const BODY_PARSER = require('body-parser');
const CORS        = require('cors');
const MORGAN      = require('morgan');
const config      = ServerConfig.getInstance();

const app: Application = EXPRESS();
const router: Router = Router();

app.use(MORGAN('combined'));
app.use(BODY_PARSER.json());
app.use(CORS());

app.listen(config.port, () => {
	console.log('server is ok', config.port);
});

app.use('/', EXPRESS.static(__dirname + '/dist'));

app.get('/test', (req: Request, res: Response) => {
	res.send('test is ok');
});

router.get('/' +
	'', (req: Request, res: Response) => {
	res.send('test from router');
});

app.use('/api', router);

