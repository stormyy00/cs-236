import mysql, { Pool } from "mysql2/promise";

export const db: Pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "test",
  waitForConnections: true,
  connectionLimit: 10, // Adjust as needed
  queueLimit: 0,
});
