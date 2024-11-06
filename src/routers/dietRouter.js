const { Router } = require('express');
const dietController = require("../controllers/dietController");
const router = Router();

router.post('/', (req, res) =>{
    dietController.create(req, res)
})

router.get('/', (req, res) =>{
    dietController.getAll(req, res)
})

router.get('/:id', (req,res) =>{
    dietController.getById(req,res)
})
 
router.delete('/:id', (req, res) =>{
    dietController.delete(req, res)
})

module.exports = router;