var express = require('express');
var router = express.Router();
const pessoa = require('../services/pessoa');

router.post('/', pessoa.create);
router.get('/', pessoa.all);
router.get('/:id', pessoa.findById);
router.put('/:id', pessoa.update);
router.delete('/:id', pessoa.delete);

module.exports = router;
