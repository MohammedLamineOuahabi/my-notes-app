import mysql from 'mysql2';
/*
Using connection pools
Connection pools help reduce the time spent connecting to 
the MySQL server by reusing a previous connection, 
leaving them open instead of closing when you are done with them.

This improves the latency of queries as you avoid all of 
the overhead that comes with establishing a new connection.
*/
export default mysql
  .createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  })
  .promise();
