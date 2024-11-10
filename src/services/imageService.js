const Image = require('../models/image');

const imageService = {
  // Função para salvar a imagem no banco de dados
  salvarImagem: async (dadosImagem, nomeImagem, tipoImagem) => {
    try {
      // Criar e salvar o registro no banco de dados
      const imagem = await Image.create({
        nome: nomeImagem,
        tipo: tipoImagem,
        dados: dadosImagem, // Armazenar o conteúdo binário da imagem
      });

      return imagem;
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
