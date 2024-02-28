const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Product", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
        },
        rate:{
            type: DataTypes.FLOAT
        },
        clicks:{
            type: DataTypes.INTEGER
        }
    },
    {timestamps: false})
}