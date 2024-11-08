const User = require("../models/user");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const userService = require("../services/userService");

const userController = {
  login: async (req, res) => {
    try {
      const {email,password} = req.body;

      const user = await User.findOne({ where :{ email } });

      if(!user){
          return res.status(400).json({
              msg: "Email ou senha incorretos!!"
          })
      }

      const isValida = await bcrypt.compare(password, user.password);
      
       if(!isValida){
          return res.status(400).json({
              msg: "Email ou senha incorretos!!"
          })
       }   

       const token = jwt.sign({ email: user.email, nome: user.nome }, process.env.SECRET, {expiresIn: '1h'});

      return res.status(200).json({
        msg: "Login realizado!",
        token
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte!" });
    }
  },
  create: async (req, res) => {
    try {
      const user = await userService.create(req.body);
      return res.status(201).json({
        msg: "Usuário criado com sucesso",
        usuario: user,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Erro ao tentar criar o usuário",
      });
    }
  },
  update: async (req, res) => {
    try {
      const user = await userService.update(req.params.id, req.body);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "User atualizado com sucesso",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao tentar o atualizar o usuário.",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await userService.getAll();
      return res.status(200).json({
        msg: "Usuários:",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar os usuários.",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await userService.getById(req.params.id);
      if (!user) {
        return res.status(400).json({
          msg: "User não encontrado!",
        });
      }
      return res.status(200).json({
        msg: "Usuário encontrado",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao buscar o usuário.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const user = await userService.delete(req.params.id);
      if (!user) {
        return res.status(400).json({
          msg: "Usuário não encontrado.",
        });
      }
      return res.status(200).json({
        msg: "Usuário deletado.",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro ao deletar o usuário.",
      });
    }
  },
};
module.exports = userController;
