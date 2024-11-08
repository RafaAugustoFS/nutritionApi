const validateUserLogin = (req, res, next) =>{
    const {email} = req.body;

    if(!email || typeof email !== 'string'){
        return res.status(400).json({msg: 'Campos inválidos'});
    }

    if(!(email.includes('@') && email.includes('.'))){
        return res.status(400).json({msg: 'Campo email inválido'})
    }
    next();
}
const validateUserRegister = (req,res, next) =>{
    const {email} = req.body;

    if(!email || typeof email !== 'string'){
        return res.status(400).json({msg: 'Campos inválidos'});
    }

    if(!(email.includes('@') && email.includes('.'))){
        return res.status(400).json({msg: 'Campo email inválido'})
    }
    next();
}
module.exports = {validateUserLogin, validateUserRegister};