import {Column, DataType, Model, Table} from 'sequelize-typescript';
import UserAttributes from './UserAttributes';

@Table({
	tableName:            'users',
	timestamps:           false,
	initialAutoIncrement: '1',
})
export default class Users extends Model<Users> implements UserAttributes {
	@Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, autoIncrementIdentity: true})
	id: number;

	@Column(DataType.TEXT)
	name: string;

	@Column(DataType.TEXT)
	password: string;
}
