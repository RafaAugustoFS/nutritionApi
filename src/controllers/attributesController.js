const Attribute = require("../models/attributes");
const attributesService = require('../services/attributesService');

const attributeController = {
  calcImc: async (req, res) => {
    try {
      const { altura, peso } = req.body;
      
      const { imc, status } = await attributesService.calcularImc(altura, peso);

      return res.status(200).json({
        msg: "IMC Calculado com sucesso",
        imc,
        status
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao calcular o IMC",
      });
    }
  },
  getById: async (req, res) => {
    try {
        const atributte = await attributesService.getById(req.params.id);
        if (!atributte) {
          return res.status(400).json({
            msg: "User não encontrado!",
          });
        }
        return res.status(200).json({
          msg: "Usuário encontrado",
          atributte,
        });
      } catch (error) {
        return res.status(500).json({
          msg: "Erro ao buscar o usuário.",
        });
      }
  },

  getAll: async (req, res) => {
    try {
      const atributte = await Attribute.findAll();
      return res.status(200).json({
        msg: "Atributos encontrados:",
        atributte
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao buscar os atributos.",
      });
    }
  }
};

module.exports = attributeController;
