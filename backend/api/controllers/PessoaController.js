const database = require("../models");
const utils = require("./Utilidades");

class PessoaController{
    async listaPessoas(req, res){
        try {
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /*
    * Função de cadastrar novas pessoas/usuários na aplicação.
    * Realiza a conexão com o DB através do sequelize, adiciona o parametro ativo=1 para pessoa e faz o insert na tabela Pessoas.
    * Também trata o parâmetro data_nascimento para que fique no modo aceito pelo DB
    */
    async cadastraPessoas(req, res){
        let pessoa = req.body;
        try {
            //adicionando parâmetro ativo=1 no objeto pessoa
            pessoa = {...pessoa, ativo: 1};

            pessoa.data_nascimento = utils.formataData(pessoa.data_nascimento, "DD/MM/YYYY", "YYYY-MM-DD");

            const novaPessoa = await database.Pessoas.create(pessoa);

            return res.status(201).json(novaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    


}

module.exports = PessoaController;