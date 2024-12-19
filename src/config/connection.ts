import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new Pool({
  max: 10, // Maximum number of connections
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "testcode",
  database: process.env.DB_NAME || "testcode",
  password: process.env.DB_PASS || "testcode",
  port: parseInt(process.env.DB_PORT || "5433", 10), // Ensure the port is a number
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // Timeout for establishing a new connection
});

export default db;
