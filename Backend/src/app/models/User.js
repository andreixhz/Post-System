const conn = require('../../database/index');
const { Model , Sequelize, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class User extends Model {}

User.init({
    uuid: {
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
        primaryKey: true
    },
    author:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    freezeTableName: true,
    sequelize: conn,
    modelName: "user"
})

User.sync();

module.exports = User;