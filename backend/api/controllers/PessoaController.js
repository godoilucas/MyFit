const database = require("../models");

class PessoaController{
    async listaPessoas(req, res){
        try {
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;