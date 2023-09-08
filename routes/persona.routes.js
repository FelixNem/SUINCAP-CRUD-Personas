const express = require('express');

//* Controlladores
const {
	getAllperonas,
	crearPersona,
	updatePersona,
	deletePersona,
} = require('../controllers/persona.controllers');

//* Middlewares
const {
	crearPersonaValida,
	actulizarPersonaValida,
	borrarPerosanValida,
} = require('../middlewares/persona.middlewares');

const personaRouter = express.Router();

personaRouter.get('/personas', getAllperonas);
personaRouter.post('/personas', crearPersonaValida, crearPersona);
personaRouter.put('/personas/:curp', actulizarPersonaValida, updatePersona);
personaRouter.delete('/personas/:curp', borrarPerosanValida, deletePersona);

module.exports = {
	personaRouter,
};
