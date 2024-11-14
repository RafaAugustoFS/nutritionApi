const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Attribute = require('./attributes');

const Diet = sequelize.define('Diet',{
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references:{
            model:Attribute,
            key:"status_id"
        }
    },
    objetivo: {
        type:DataTypes.STRING
    },
    cafedamanha: {
        type: DataTypes.STRING
    },
    almoco: {
        type: DataTypes.STRING
    },
    lanchedatarde: {
        type: DataTypes.STRING
    },
    jantar: {
        type: DataTypes.STRING
    },
    observacao: {
        type: DataTypes.STRING
    }
},{
    timestamps: true
});
module.exports = Diet;