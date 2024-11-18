const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Diet = sequelize.define('Diet',{
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