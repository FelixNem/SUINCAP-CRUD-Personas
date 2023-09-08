//? Codigo que evita poner un try catch en cada controllador

const catchAsync = fn => {
	return (req, res, next) => {
		fn(req, res, next).catch(err => next(err));
	};
};

module.exports = { catchAsync };
