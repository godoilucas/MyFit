const { Router } = require("express");
const router = Router();
const PessoaController = require("../controllers/PessoaController");
const pessoasController = new PessoaController();

router.get("/pessoas", pessoasController.listaPessoas);
router.get("/pessoas/todos", pessoasController.listaTodasPessoas);
router.get("/pessoas/:id", pessoasController.listaPessoasPorId);
router.post("/pessoas", pessoasController.cadastraPessoas);

module.exports = router;