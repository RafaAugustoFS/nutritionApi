const fs = require('fs');
const Image = require('../models/image');

const imageService = {
 salvarImagem: async (caminhoImagem, nomeImagem, tipoImagem) => {
    try {
      // Ler a imagem como um buffer
      const dadosImagem = fs.readFileSync(caminhoImagem);
  
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
  
  // Função para recuperar a imagem como BLOB do banco de dados
 recuperarImagem: async (idImagem) =>{
    try {
      // Recuperar a imagem pelo ID
      const imagem = await Image.findByPk(idImagem);
  
      if (!imagem) {
        throw new Error('Imagem não encontrada');
      }
  
      // Retornar a imagem (com os dados binários)
      return imagem;
    } catch (error) {
      throw new Error('Erro ao recuperar a imagem: ' + error.message);
    }
  }
}


module.exports = imageService;
