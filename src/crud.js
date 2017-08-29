const 	Schema = require('./db/schema.js'),
		Model = require('./db/model.js')('People', Schema);

module.exports = {
	create : (data) => {
		const p = new Model(data);
		p.save((err, data) => {
			if(err) return console.log(`ERROR : ${err}`);
			return console.log(`CREATED : ${data}`)
		})
	},
	find  : (query) => {
		Model.find(query, (err, data) => {
			if(err) return console.log(`ERROR : ${err}`);
			return console.log(`FINDED : ${data}`)
		})
	},
	update : (query, data, _options) => {
		const options = _options || {};
		Model.update(query, data, options, (err, data) => {
			if(err) return console.log(`ERROR : ${err}`);
			return console.log(`UPDATED : `, data)
		})
	},
	remove : (query) => {
		Model.remove(query, (err, data) => {
			if(err) return console.log(`ERROR : ${err}`);
			return console.log(`REMOVED : data`, data)
		})
	},
}
 	