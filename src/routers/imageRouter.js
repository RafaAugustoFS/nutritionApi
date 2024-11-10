const { Router } = require('express');
const imageController = require("../controllers/imageController");
const router = Router();

router.post('/', imageController.salvarImagem);

router.get('/:idImagem', imageController.recuperarImagem);
module.exports = router;