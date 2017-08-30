module.exports = (named, schema) => {
	const mongoose = require('mongoose');
	return mongoose.model(named, schema);
}