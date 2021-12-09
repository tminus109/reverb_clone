import dbPool from "../db";

export function getMeAPromise(
  query: string,
  ...placeholders: any
): Promise<any> {
  return new Promise((resolve, reject) => {
    dbPool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        console.log("connected as id " + connection.threadId);
        connection.query(query, [...placeholders], (err, result) => {
          ///
          console.log(query);
          ///
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
