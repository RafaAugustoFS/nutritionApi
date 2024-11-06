const dietService = require("../services/dietService");

const dietController ={
    create: async(req, res) =>{
        try {
            const diet = await dietService.create(req.body);
            return res.status(201).json({
                msg: 'Dieta criada com sucesso',
                diet
            })
        } catch (error) {
            console.error(error)
            console.log(req.body);
            
            return res.status(500).json({
                msg: 'Erro ao tentar criar a dieta'
            })
        }
    },
    getAll: async(req, res) =>{
        try {
            const diet = await dietService.getAll() 
            return res.status(200).json({
                msg: 'Dietas:',
                diet
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar as dietas.'
            }) 
        }
    },
    getById: async(req,res) =>{
        try {
            const diet = await dietService.getById(req.params.id)
            if(!diet){
                return res.status(400).json({
                    msg: 'Diet não encontrado!'
                })
            }
            return res.status(200).json({
                msg: "Dieta encontrada",
                diet
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao buscar a dieta.'
            }) 
        }
    },
    delete: async(req, res) =>{
        try {
            const diet = await dietService.delete(req.params.id)
            if(!diet){
                return res.status(400).json({
                    msg: 'Dieta não encontrada.',
                })
            }
            return res.status(200).json({
                msg: 'Dieta deletada.',
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao deletar a dieta.'
            })
        }
    }

}
module.exports = dietController;