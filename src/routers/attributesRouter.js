const { Router } = require('express');
const atributtesController = require("../controllers/attributesController");
const router = Router();

router.post('/', atributtesController.calcImc);
router.get('/', atributtesController.getAll);
router.get('/:id', atributtesController.getById);


module.exports = router;