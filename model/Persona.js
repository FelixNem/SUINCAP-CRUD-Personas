const { db, DataTypes } = require('../database/config');

const Persona = db.define('persona', {
	curp: {
		type: DataTypes.STRING,
		unique: true,
		primaryKey: true,
		allowNull: false,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	aPaterno: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	aMaterno: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nacimiento: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = { Persona };
