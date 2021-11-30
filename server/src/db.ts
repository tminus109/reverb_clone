import mysql from "mysql2";
import dbConfig from "./config/dbConfig";

const dbPool = mysql.createPool(dbConfig);

dbPool.on("connection", (connection) => {
  connection.on("error", function (err: Error) {
    console.error(err.message);
  });
  connection.on("close", function (err: Error) {
    console.error(err.message);
  });
});

export default dbPool;
