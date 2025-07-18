import { Sequelize } from "sequelize"
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
	process.env.NAME_DB_EJECUCION,
	process.env.USER_DB_LOCAL,
	process.env.PASSWORD_DB_LOCAL,
	{
		dialect: 'mysql',
		host: process.env.HOST_DB_LOCAL,
		//port: process.env.DB_PORT,
		logging: false,
		define: {
			timestamps: false,
			paranoid: false,
			underscored: true,
			freezeTableName: true,
		},
	}
)

export default sequelize;
