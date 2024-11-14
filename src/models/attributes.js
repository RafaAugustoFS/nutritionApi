const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Attribute = sequelize.define('Attribute',{
    altura: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    peso: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    imc: {
        type: DataTypes.DOUBLE,
        allowNull:true
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true
    },
    status_id:{
        type: DataTypes.INTEGER,
        unique: true
    },
},{
    timestamps: true
});
module.exports = Attribute;