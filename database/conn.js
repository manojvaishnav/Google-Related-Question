const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create the QA_Table table if it doesn't exist
async function createTable() {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS QA_Table (
        id INT PRIMARY KEY AUTO_INCREMENT,
        search_query VARCHAR(255) NOT NULL,
        question VARCHAR(255) NOT NULL,
        answer TEXT NOT NULL
      )
    `);
    connection.release();
    console.log('QA_Table table created or already exists');
  } catch (error) {
    console.error('Error creating QA_Table table:', error);
  }
}

// Call the function to create the table
createTable();

module.exports = pool;
