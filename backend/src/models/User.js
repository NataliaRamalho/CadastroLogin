const {Model, DataTypes} = require('sequelize')


class User extends Model{
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            name: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize,
            tableName: 'users',
        })
    }
}

module.exports = User