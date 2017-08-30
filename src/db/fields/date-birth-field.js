module.exports = { 
	type : Date,
	get 	 : (value) => (value.toLocaleDateString('pt-BR')),
	required : [true, 'Favor informar a data de nascimento.'],
	validate : [(value) => ( value < Date.now() ), 'Data de nascimento inválida : \'{VALUE}\'.']
}