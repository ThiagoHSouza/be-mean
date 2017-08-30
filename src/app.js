require('./db/config.js');
const 	CRUD = require('./crud.js');


const model = {
	firstName : /ta/i,
}

// CRUD.create({
// 	firstName: 'Tassile Tamie',
// 	lastName: 'Schafranski Sato',
// 	email: 'tassi.sato@gmail.com',
// 	dateBirth: new Date('03/25/2015')
// })
CRUD.find(model)
