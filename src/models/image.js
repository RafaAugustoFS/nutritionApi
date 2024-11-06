const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Image = sequelize.define('Image',{
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dados: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
},{
    timestamps: true
});
module.exports = Image;