import {Response, Request} from 'express';
import {submitPayload} from '../../../client/src/store/models/types';
import {InterfaceAction} from '../../../models/Application/InterfaceAction';
import Users from '../DataBase/Users/Users';
import RouteApi from '../RouteApi';

export default class ActionApiAuth implements InterfaceAction {
	public readonly _route = new RouteApi();

	public action() {

		return (req: Request, res: Response) => {
			const data = req.body;

			this.checkUser(data, res);
		};
	}

	public path(): string {
		return '/auth';
	}

	public fullPath(): string {
		return this._route.getBase() + this.path();
	}

	public checkUser(data: submitPayload, res: Response) {
		const bcrypt = require('bcrypt');

		const query: Promise<any> = Users.findOne({
			where: {
				name: data.name,
			}
		});

		const test = query.then((hit: Users) => {
				if (!bcrypt.compareSync(data.password, hit.password)) {
					throw new Error();
				}

				res.send({
					info:  {
						name: hit.name,
						id:   hit.id,
					},
				});
			})
			.catch(() => {
				res.send({
					query: data.name + data.password,
				})
			});
	}
}
