import dbPool from "../db";

function dbPromise(query: string, args: any[]): Promise<any> {
  return new Promise((resolve, reject) => {
    dbPool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(query, [...args], (err, result) => {
          connection.release();
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

export default dbPromise;
