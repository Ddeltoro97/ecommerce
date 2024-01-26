const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Sale", {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        address:{
            type: DataTypes.STRING,
            allowNull: false
        },
        value:{
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {timestamps: true})
}