'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length<3) throw new Error("O campo nome deve conter mais de 3 caracteres");
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "dado do tipo e-mail inválido"
        }
      },
      unique: {
        msg: "e-mail já cadastrado na plataforma"
      }
    },
    data_nascimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true
  });
  return Pessoas;
};