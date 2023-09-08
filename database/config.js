const dotEnv = require('dotenv');
const { Sequelize, DataTypes } = require('sequelize');

dotEnv.config({ path: './.env' });

const db = new Sequelize({
	dialect: 'mysql',
	host: localhost,
	database: id21235580_suinpac_personas_db,
	username: id21235580_root,
	password: Feneam_99,
	logging: false,
});

module.exports = { db, DataTypes };
