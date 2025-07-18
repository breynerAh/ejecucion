import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const ValoresContratosBrig = sequelize.define('valores_contratos_brig', {
	valorContratoId: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	codigo: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notNull: { msg: "El campo codigo es requerido" }
		}
	},
	tipoBrigada: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notNull: { msg: "El campo tipoBrigada es requerido" }
		}
	},
	tipoDia: {
		type: DataTypes.SMALLINT,
		allowNull: false,
		validate: {
			notNull: { msg: "El campo tipoDia es requerido" },
		}
	},
	valor: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notNull: { msg: "El campo valor es requerido" },
			isNumeric: { msg: "El campo valor debe ser de tipo numérico" }
		}
	}
}, {
	timestamps: false
});

export default ValoresContratosBrig;
