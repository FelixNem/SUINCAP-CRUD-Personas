//* Modelo
const { Persona } = require('../model/Persona');

//* Utils
const { catchAsync } = require('../utils/catchAsync');

const getAllperonas = catchAsync(async (req, res, next) => {
	const personas = await Persona.findAll({
		attributes: ['curp', 'nombre', 'aPaterno', 'aMaterno', 'nacimiento'],
	});

	res.status(200).json({
		status: 'ok',
		personas,
	});
});

const crearPersona = catchAsync(async (req, res, next) => {
	const { curp, nombre, aPaterno, aMaterno, nacimiento } = req.body;

	const newPersona = await Persona.create({
		curp,
		nombre,
		aPaterno,
		aMaterno,
		nacimiento,
	});

	res.status(201).json({
		status: 'ok',
		data: { newPersona },
	});
});

const updatePersona = catchAsync(async (req, res, next) => {
	const { persona } = req;
	const { curp, nombre, aPaterno, aMaterno, nacimiento } = req.body;

	await persona.update({
		curp,
		nombre,
		aPaterno,
		aMaterno,
		nacimiento,
	});

	res.status(204).json({
		messague: `Informacion de ${nombre} ACTUALIZADA!!!`,
	});
});

const deletePersona = catchAsync(async (req, res, next) => {
	const { persona } = req;

	await persona.destroy();

	res.status(204).json({
		messague: `$registro eliminado UnU`,
	});
});

module.exports = {
	getAllperonas,
	crearPersona,
	updatePersona,
	deletePersona,
};
