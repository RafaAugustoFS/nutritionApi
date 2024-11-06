// controllers/imagemController.js
const imageService = require('../services/imageService');

const imageController ={
    salvarImagem: async (req, res) => {
        try {
          const { caminhoImagem, nomeImagem, tipoImagem } = req.body;
      
          // Chamar o serviço para salvar a imagem
          const imagem = await imageService.salvarImagem(caminhoImagem, nomeImagem, tipoImagem);
      
          res.status(201).send({
            message: 'Imagem salva com sucesso!',
            imagemId: imagem.id,
          });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Erro ao salvar a imagem.' });
        }
      },
    recuperarImagem: async (req, res) => {
        try {
          const { idImagem } = req.params;
      
          // Chamar o serviço para recuperar a imagem
          const imagem = await imageService.recuperarImagem(idImagem);
      
          res.status(200).send({
            nome: imagem.nome,
            tipo: imagem.tipo,
            dados: imagem.dados.toString('base64'), // Converter os dados binários para base64 para exibição
          });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Erro ao recuperar a imagem.' });
        }
      }
}

module.exports = imageController;