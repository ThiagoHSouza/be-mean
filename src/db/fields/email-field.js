module.exports = { 
	type     : String,
	set		 : (value) => (value.toLowerCase()),
	trim     : true,
	unique   : true,
	required : [true, 'Favor informar o email.'],
	validate : {
		message   : 'Email inválido : \'{VALUE}\'.',
		validator : (value) => ( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) )
	}
}

function toLowerCase(value){
	return value.toLowerCase();
}