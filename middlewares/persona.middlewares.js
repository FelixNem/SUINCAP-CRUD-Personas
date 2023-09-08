const { body, validationResult } = require('express-validator');

//* Modelo
const { Persona } = require('../model/Persona');

//* Utils
const { catchAsync } = require('../utils/catchAsync');

const personaExiste = catchAsync(async (req, res, next) => {
	const { curp } = req.params;

	const persona = await Persona.findOne({ where: { curp } });

	if (!persona) {
		return res.status(404).json({
			message: 'Usuario no encontrado'
		});
	}

	req.persona = persona;
	next();
});

const curpUso = catchAsync(async (req, res, next) => {
	const { curp } = req.body;

	const persona = await Persona.findOne({ where: { curp } });

	if (persona) {
		return res.status(404).json({
			message: 'Curp ya registrada'
		});;
	}

	next();
});

const checkValidations = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const errorMessages = errors.array().map(err => err.msg);

		const message = errorMessages.join('. ');

		return res.status(400).json({
			message
		});;
	}

	next();
};

const crearPersonaValida = [
	curpUso,
	body('curp')
		.isString()
		.withMessage('CURP debe ser texto')
		.notEmpty()
		.withMessage('CURP no puede estar vacio')
		.isLength({ min: 18, max: 18 })
		.withMessage('CURP debe tener 18 caracteres'),
	body('nombre')
		.isString()
		.withMessage('nombre debe ser texto')
		.notEmpty()
		.withMessage('nombre no puede estar vacio')
		.isLength({ min: 3 })
		.withMessage('CURP debe tener al menos 3 caracteres'),
	body('aPaterno')
		.isString()
		.withMessage('Apellido Paterno debe ser texto')
		.notEmpty()
		.withMessage('Apellido Paterno no puede estar vacio')
		.isLength({ min: 3 })
		.withMessage('Apellido Paterno debe tener al menos 3 caracteres'),
	body('aMaterno')
		.isString()
		.withMessage('Apellido Materno debe ser texto')
		.notEmpty()
		.withMessage('Apellido Materno no puede estar vacio')
		.isLength({ min: 3 })
		.withMessage('Apellido Materno debe tener al menos 3 caracteres'),
	checkValidations,
];

const actulizarPersonaValida = [
	personaExiste,
	body('curp')
		.isString()
		.withMessage('CURP debe ser texto')
		.notEmpty()
		.withMessage('CURP no puede estar vacio')
		.isLength({ min: 18, max: 18 })
		.withMessage('CURP debe tener 18 caracteres'),
	body('nombre')
		.isString()
		.withMessage('nombre debe ser texto')
		.notEmpty()
		.withMessage('nombre no puede estar vacio')
		.isLength({ min: 3 })
		.withMessage('CURP debe tener al menos 3 caracteres'),
	body('aPaterno')
		.isString()
		.withMessage('Apellido Paterno debe ser texto')
		.notEmpty()
		.withMessage('Apellido Paterno no puede estar vacio')
		.isLength({ min: 3 })
		.withMessage('Apellido Paterno debe tener al menos 3 caracteres'),
	body('aMaterno')
		.isString()
		.withMessage('Apellido Materno debe ser texto')
		.notEmpty()
		.withMessage('Apellido Materno no puede estar vacio')
		.isLength({ min: 3 })
		.withMessage('Apellido Materno debe tener al menos 3 caracteres'),
	checkValidations,
];

const borrarPerosanValida = [personaExiste, checkValidations];

module.exports = {
	crearPersonaValida,
	actulizarPersonaValida,
	borrarPerosanValida,
};
