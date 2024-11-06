const Diet = require("../models/diet");

const dietService = {
  create: async (diet) => {
    try {
      return await Diet.create(diet);
    } catch (error) {
      throw new Error("Erro ao criar a dieta.");
    }
  },
  getAll: async () => {
    try {
      return await Diet.findAll();
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todas as dietas.");
    }
  },
  getById: async(id) =>{
    try {
        const diet = await Diet.findByPk(id)
        if(!diet){
            return null;
        }
        return diet;
    } catch (error) {
        throw new Error('Ocorreu um erro ao buscar a dieta.')
    }
  },
  delete: async (id) => {
    try {
      const diet = await Diet.findByPk(id);
      if (!diet) {
        return null;
      }
      await diet.destroy();
      return diet;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar a dieta.");
    }
  },
};
module.exports = dietService;
