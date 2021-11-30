import mysql from "mysql2";
import dbConfig from "./configs/dbConfig";

const dbPool = mysql.createPool(dbConfig);

dbPool.on("connection", (connection) => {
  connection.on("error", function (error: Error) {
    console.error(error);
  });
  connection.on("close", function (error: Error) {
    console.error(error);
  });
});

export default dbPool;
