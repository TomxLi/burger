// Set up MySQL connection.
var mysql = require("mysql");
const dburl = process.env.JAWSDB_URL 
            || {
                host: 'localhost',
                port: 3306,
                user: "root",
                password: "password",
                database: "burger_db"
              }
var connection = mysql.createConnection(dburl);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;