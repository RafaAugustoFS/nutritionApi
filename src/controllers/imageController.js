const multer = require('multer');
const imageService = require('../services/imageService');

// Configuração do multer para armazenar as imagens
const storage = multer.memoryStorage();  // Usamos memoryStorage para armazenar o arquivo na memória
const upload = multer({ storage: storage });

const imageController = {
  // Método para salvar a imagem
  salvarImagem: [upload.single('imagem'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send({ message: 'Nenhuma imagem enviada.' });
      }

      // Agora, a imagem está disponível no req.file
      const { originalname, mimetype, buffer } = req.file; // Os dados do arquivo

      // Chamar o serviço para salvar ou atualizar a imagem
      const imagem = await imageService.salvarImagem(buffer, originalname, mimetype);
      
      res.status(201).send({
        message: 'Imagem salva com sucesso!',
        imagemId: imagem.id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao salvar a imagem.' });
    }
  }],

  // Método para recuperar a imagem
  recuperarImagem: async (req, res) => {
    try {
      const { idImagem } = req.params;

      // Chamar o serviço para recuperar a imagem
      const imagem = await imageService.recuperarImagem(idImagem);

      // Retornar os dados da imagem (convertido para base64)
      res.status(200).send({
        nome: imagem.nome,
        tipo: imagem.tipo,
        dados: imagem.dados.toString('base64'), // Converter os dados binários para base64 para exibição
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro ao recuperar a imagem.' });
    }
  },
};

module.exports = imageController;
