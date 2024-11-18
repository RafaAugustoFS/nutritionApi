const Attribute = require("../models/attributes");

const attributesService={
    calcularImc: async (altura, peso) => {
        const imcCru = peso / (altura * altura);

        const imc = parseFloat(imcCru.toFixed(2));
        let status;
        let status_id;
      
        switch (true) {
          case imc < 18.5:
            status = "Abaixo do peso";
            status_id = 1; 
            break;
          case imc >= 18.5 && imc < 24.9:
            status = "Peso normal";
            status_id = 2;
            break;
          case imc >= 25.0:
            status = "Acima do peso";
            status_id = 3;
            break;
          default:
            status = "Obesidade";
            status_id = 3
        }
      
        return await Attribute.create({
            altura,
            peso,
            imc,
            status,
            status_id
        })
      },
      getAll: async () => {
        try {
          return await Attribute.findAll();
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar todos atributos.");
        }
      },
      getById: async (id) => {
        try {
          const atributte = await Attribute.findByPk(id);
          if (!atributte) {
            return null;
          }
          return atributte;
        } catch (error) {
          throw new Error("Ocorreu um erro ao buscar o usuário");
        }
      },
}
  
  module.exports = attributesService;
  