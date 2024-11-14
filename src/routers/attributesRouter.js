const { Router } = require('express');
const attributesController = require("../controllers/attributesController");
const router = Router();

router.post('/', attributesController.calcImc);
router.get('/', attributesController.getAll);
router.get('/:id', attributesController.getById);


module.exports = router;