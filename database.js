const Host = process.platform ===  "127.0.0.1" ? "win32": "165.232.151.6";
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: Host,
  user: "raj",
  password: "Kamingo@11",
  database: "kcs",
  charset:"utf8mb4",
  timeout: 60000

});


connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  
});
module.exports = connection;
