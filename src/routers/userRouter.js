const { Router } = require('express');
const userController = require("../controllers/userController");
const { validateUserRegister, validateUserLogin } = require('../middlewares/validateUser');

const router = Router();

router.post('/', validateUserRegister, (req, res) =>{
    userController.create(req, res)
})

router.post('/login', validateUserLogin, (req, res) =>{
    userController.login(req, res)
})
 
router.get('/', (req, res) =>{
    userController.getAll(req, res)
})
 
router.delete('/:id', (req, res) =>{
    userController.delete(req, res)
})
 
router.put('/:id', (req, res) =>{
    userController.update(req, res)
})
 
router.get('/:id', (req, res) =>{
    userController.getOne(req, res)
})

module.exports = router;