const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Attribute = require('./attributes');

const User = sequelize.define('User',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Attribute,
            key:"status_id"
        }
    }
},{
    timestamps: true
});
module.exports = User;