const 	Schema = require('./db/schema.js'),
		Model = require('./db/model.js')('People', Schema);

module.exports = {
	create : (data) => {
		const p = new Model(data);
		p.save(logOperation('SAVED'))
	},
	find  : (query) => {
		Model.find(query, logOperation('FINDED'))
	},
	update : (query, data, _options) => {
		const options = _options || {};
		Model.update(query, data, options, logOperation('UPDATED'))
	},
	remove : (query) => {
		Model.remove(query, logOperation('REMOVED'))
	},
};

function logOperation(op){
	return (err, data) => {
		if(err) return console.log(`ERROR : ${err}`);
		return console.log(`${op} : data`, data)
	}

 }
