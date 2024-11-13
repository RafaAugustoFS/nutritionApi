const Attribute = require("../models/attributes");

const attributesService={
    calcularImc: async (altura, peso) => {
        const imcCru = peso / (altura * altura);

        const imc = parseFloat(imcCru.toFixed(2));
        let status;
      
        switch (true) {
          case imc < 18.5:
            status = "Abaixo do peso";
            break;
          case imc >= 18.5 && imc < 25.0:
            status = "Peso normal";
            break;
          case imc >= 25.0 && imc < 30.0:
            status = "Sobrepeso";
            break;
          case imc >= 30.0 && imc < 35.0:
            status = "Obesidade grau I";
            break;
          case imc >= 35.0 && imc <= 40:
            status = "Obesidade grau II";
            break;
          default:
            status = "Obesidade grau III";
        }
      
        return await Attribute.create({
            altura,
            peso,
            imc,
            status
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
  