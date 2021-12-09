import mysql from "mysql2";

const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

dbPool.on("connection", (connection) => {
  connection.on("error", function (error: any) {
    if (error) throw error;
  });
  connection.on("close", function (error: any) {
    if (error) throw error;
  });
});

export default dbPool;
