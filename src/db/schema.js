const mongoose = require('mongoose')

const	firstName  = require('./fields/first-name-field.js'),
		lastName   = require('./fields/last-name-field.js'),
		dateBirth  = require('./fields/date-birth-field.js'),
		created_at = require('./fields/created-at-field.js')


const Schema = mongoose.Schema;
const _schema = {
	firstName,
	lastName,
	dateBirth,
	created_at
}

module.exports = new Schema(_schema);