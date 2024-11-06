const { Router } = require('express');
const imageController = require("../controllers/imageController");
const router = Router();

router.post('/', (req, res) =>{
    imageController.salvarImagem(req, res);
})

router.get('/', (req, res) =>{
    imageController.recuperarImagem(req, res);
})

module.exports = router;