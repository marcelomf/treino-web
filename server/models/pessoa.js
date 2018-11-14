'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('pessoa', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    sexo: DataTypes.CHAR,
    ativo: DataTypes.BOOLEAN
  }, {});
  Pessoa.associate = function(models) {
    // associations can be defined here
  };
  return Pessoa;
};
