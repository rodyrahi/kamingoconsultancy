const Database = require('better-sqlite3');

const db = new Database('../database/kcs/clients.db');



db.exec(`
  CREATE TABLE IF NOT EXISTS client (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,
    email TEXT,
    phone TEXT,
    subject TEXT,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);



console.log('Connected to the database');

module.exports = {db };