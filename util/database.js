const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "A0@80b18", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "A0@80b18",
// });

// module.exports = pool.promise();
