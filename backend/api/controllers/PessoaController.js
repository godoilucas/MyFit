const database = require("../models");
const utils = require("./Utilidades");

class PessoaController{
    /*
    * Função responsável por listar todas as pessoas que possuem status ativo como true;
    */
    async listaPessoas(req, res){
        try {
            const pessoas = await database.Pessoas.findAll();
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /*
    * Função resposável por listar todas as pessoas, independente do status de ativo ou não
    */
    async listaTodasPessoas(req, res){
        try {
            const pessoas = await database.Pessoas.scope("todos").findAll();
            
            return res.status(200).json(pessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /*
    * Função responsável por listar a pessoa buscando seu ID na base.
    * Lista independente do status ativo ser true ou false.
    */
    async listaPessoasPorId(req, res){
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.scope("todos").findOne({where:{ id: Number(id) }});

            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    /*
    * Função responsável por listar a pessoa buscando seu e-mail na base.
    * Lista independente do status ativo ser true ou false.
    */
    async listaPessoasPorEmail(email){
    try {
        const pessoa = await database.Pessoas.scope("todos").findOne({where:{ email: email }});

        return pessoa;
    } catch (error) {
        return error.message;
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

    async atualizaPessoa(req, res){

    }
    
    async deletaPessoa(req, res){

    }
}

module.exports = PessoaController;