const bcrypt = require('bcryptjs');
const User = require("../models/user");

// app.js -> router -> userRouter -> userController -> userService -> model -> database
const userService = {
  create: async (user) => {
    try {
      if (!user.password) {
        throw new Error("Senha não fornecida.");
      }
      
      const senhaCrypto = await bcrypt.hash(user.password, 10);
      
      return await User.create({
        nome: user.nome,
        email: user.email,
        password: senhaCrypto,
      });
    } catch (error) {
      throw new Error("Erro ao criar o usuário");
    }
  },
  update: async (id, userToUpdate) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      await user.update(userToUpdate);
      await user.save();
      return user;
    } catch (error) {
      throw new Error("Ocorreu um erro ao atualizar o usuário.");
    }
  },
  getById: async (id) => {
    try {
      const atributte = await User.findByPk(id);
      if (!atributte) {
        return null;
      }
      return atributte;
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar o usuário");
    }
  },
  getAll: async () => {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error("Ocorreu um erro ao buscar todos usuários.");
    }
  },
  delete: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return null;
      }
      await user.destroy();
      return user;
    } catch (error) {
      throw new Error("Ocorreu um erro ao deletar o usuário.");
    }
  },
};
module.exports = userService;
