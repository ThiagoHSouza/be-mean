const mongoose = require('mongoose')

const	firstName  = require('./fields/first-name-field.js'),
		lastName   = require('./fields/last-name-field.js'),
		dateBirth  = require('./fields/date-birth-field.js'),
		email = require('./fields/email-field.js')
		created_at = require('./fields/created-at-field.js')


const Schema = mongoose.Schema;
const _schema = {
	firstName,
	lastName,
	dateBirth,
	email,
	created_at
}

let schemaPeople = new Schema(_schema);
schemaPeople.virtual('fullName').get((value) => (`${this.firstName} ${this.lastName}`))

module.exports = schemaPeople;

// console.log("schema", schema);

// const User = mongoose.model('People', schema);
// let dat = new Date();

// const obj = {
// 	firstName : 'Thiago H',
// 	lastName : 'de Souza',
// 	dateBirth : Date.now(),
// 	email : 'thiago@GMAIL.com',
// 	dateBirth : dat.setDate(dat.getDate() + 1)
// }
// const u = new User(obj);

// let error = u.validateSync() ? u.validateSync().errors : null ;
// for(let tp in error){
// 	console.log("VALIDOU: " + tp + " : ", error[tp].message);
	
// }

// console.log('EMAIL : ', u.email)
// console.log('DATE : ', u.dateBirth)
// console.log('FULLNAME : ', u.fullName)




