import dbPool from "../db";

function getMeAPromise(query: string, [...placeholders]): Promise<any> {
  return new Promise((resolve, reject) => {
    dbPool.getConnection((err, connection) => {
      if (err) {
        connection.release();
        reject(err);
      } else {
        connection.query(query, [...placeholders], (err, result) => {
          if (err) {
            connection.release();
            reject(err);
          } else {
            connection.release();
            resolve(result);
          }
        });
      }
    });
  });
}

export default getMeAPromise;
