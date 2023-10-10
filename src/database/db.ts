const {Sequelize} = require('sequelize');

export const database = new Sequelize('xe', 'user_almacen', '12345678**', {
    host: 'localhost',
    port: 1521,
    dialect: 'oracle'
  });


async function generateDb() {
    await database.sync({ force: false })
    console.log('Base de datos y tablas creada');
}

generateDb();



