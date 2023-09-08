const { app } = require('./app');

//* Database
const { db } = require('./database/config');

const startServer = async () => {
	try {
		await db.authenticate();

		await db.sync();

		//* escuchando Peticiones
		const PORT = process.env.PORT || 4001;
		app.listen(PORT, () => {
			console.log(`CRUD-Personas Server is Running!!! on PORT: ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
