const {db} = require('../../.env')

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: db.username,
    password: db.password,
    database: db.database,
    define: {
        timestamps: true,
        underscored: true,
    }
}
