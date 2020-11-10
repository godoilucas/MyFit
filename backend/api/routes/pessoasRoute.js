const { Router } = require("express");
const router = Router();
const PessoaController = require("../controllers/PessoaController");
const pessoasController = new PessoaController();

router.get("/pessoas", pessoasController.listaPessoas);
router.post("/pessoas", pessoasController.cadastraPessoas);

module.exports = router;