const db = require('../models');
const Pessoa = db.pessoa;

exports.create = async (req, res) => {
	try {
		let pessoa = await Pessoa.create(req.body);
		return res.status(200).send(pessoa);
	} catch(err) {
		console.log(err)
		return res.status(500).send({error: true, msg:"Não foi possível criar pessoa"});
	}
	// Pessoa.create(req.body)
	// .then(pessoa => {		
	// 	res.send(pessoa);
	// })
	// .catch(err => {
	// 	res.status(500).send({error: true, msg:"Não foi possível criar pessoa"})
	// });
};
 
exports.all = async (req, res) => {
	try {
		let pessoas = await Pessoa.findAll();
		return res.status(200).send(pessoas);
	} catch(err) {
		console.log(err);
		return res.status(500).send({error: true, msg:"Não foi possível listar pessoas"});
	}
	// Pessoa.findAll()
	// .then(pessoas => {
	//   res.send(pessoas);
	// });
};

exports.findById = async (req, res) => {
	try {
		let pessoa = await Pessoa.findById(req.params.id);
		console.log("TESTE");
		return res.status(200).send(pessoa);
	} catch(err) {
		console.log(err);
		return res.status(500).send({error: true, msg: "Não foi possível encontrar pessoa"});
	}
	// Pessoa.findById(req.params.id)
	// .then(pessoa => {
	// 	res.send(pessoa);
	// })
};
 
exports.update = async (req, res) => {
	try {
		await Pessoa.update(req.body, { where: {id: req.params.id} });
		return res.status(200).send({error:false, msg: "Pessoa atualizada com sucesso"});
	} catch(err) {
		console.log(err)
		return res.status(500).send({error: true, msg: "Não foi possível atualizar pessoa"});
	}
	// Pessoa.update(
	// 	req.body, 
	// 	{ where: {id: req.params.id} }
	// ).then(() => {
	// 	res.status(200).send("Atualizado a pessoa com o id = " + req.params.id);
	// });
};
 
exports.delete = async (req, res) => {
	try {
		await Pessoa.destroy({where: { id: req.params.id }});
		return res.status(200).send({error: false, msg: "Pessoa removida com sucesso"});
	} catch(err) {
		console.log(err)
		return res.status(500).send({error: true, msg: "Não foi possível remover pessoa"});
	}
	// Pessoa.destroy({
	//   where: { id: req.params.id }
	// }).then(() => {
	//   res.status(200).send('Deletado pessoa com id = ' + req.params.id);
	// });
};
