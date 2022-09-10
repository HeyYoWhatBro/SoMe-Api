const httperror = require('httperror')
module.exports = async (error, req, res, next) => {
	console.error(error)
	if (error.expose === true) return res.status(error.status || 500).send(error)
	if (error.expose != true) return res.status(500).send(httperror.InternalServerError())
		}
