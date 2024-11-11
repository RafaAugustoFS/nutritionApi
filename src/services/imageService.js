const Image = require('../models/image');

const imageService = {
  // Função para salvar a imagem no banco de dados
  salvarImagem: async (dadosImagem, nomeImagem, tipoImagem) => {
    try {
      // Verifica se já existe uma imagem no banco (sempre será o ID 1)
      let imagem = await Image.findOne({ where: { id: 1 } });

      if (imagem) {
        // Se já existir uma imagem, atualiza o registro existente
        imagem.nome = nomeImagem;
        imagem.tipo = tipoImagem;
        imagem.dados = dadosImagem;
        await imagem.save();
        return imagem;
      } else {
        // Se não existir uma imagem, cria um novo registro (com ID 1)
        imagem = await Image.create({
          id: 1, // Forçamos o ID 1 para garantir que sempre haverá apenas um registro
          nome: nomeImagem,
          tipo: tipoImagem,
          dados: dadosImagem, // Armazena o conteúdo binário da imagem
        });
        return imagem;
      }
    } catch (error) {
      throw new Error('Erro ao salvar a imagem: ' + error.message);
    }
  },

  // Função para recuperar a imagem do banco de dados
  recuperarImagem: async (idImagem) => {
    try {
      // Recuperar a imagem pelo ID
      const imagem = await Image.findByPk(idImagem);

      if (!imagem) {
        throw new Error('Imagem não encontrada');
      }

      return imagem;
    } catch (error) {
      throw new Error('Erro ao recuperar a imagem: ' + error.message);
    }
  }
};

module.exports = imageService;
