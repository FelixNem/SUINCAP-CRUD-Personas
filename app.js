const express = require('express');
var cors = require('cors');

//* Routers
const { personaRouter } = require('./routes/persona.routes');

//* Creando el servidor express
const app = express();
app.use(cors());
// Lectura y Parseo del Body
app.use(express.json());

app.use( express.static('public') )

//* Endponits
app.use('/api', personaRouter);

//! catch rutas no existentes
app.all('*', (req, res) => {
	res.status(404).json({
		status: 'error',
		messague: `${req.method} ${req.url} no existe en el server`,
	});
});

module.exports = { app };
