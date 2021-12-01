import mysql from "mysql2";
import dbEnvs from "./config/dbEnvs";

const dbPool = mysql.createPool(dbEnvs);

dbPool.on("connection", (connection) => {
  connection.on("error", function (err: Error) {
    console.error(err.message);
  });
  connection.on("close", function (err: Error) {
    console.error(err.message);
  });
});

export default dbPool;
