import mysql, { Pool } from 'mysql2/promise'
import AppConfig from './app.config';


/**@description MySQL Server connection configuration */
class DatabaseConnectionPool {
  db: Pool;

  constructor() {

    this.db = mysql.createPool({
      host: AppConfig.database.HOST,
      user: AppConfig.database.USER,
      password: AppConfig.database.PASSWORD,
      database: 'ProofOfConcept',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    this.Init();
  }

  // Initializing connection pool
  private async Init() {
    await this.db.getConnection()
      .then(con => {
        console.table([{ HOST: con.connection.config.host, DATASOURCE: con.connection.config.database }])
      })
      .catch(e => console.error(e))
  }
}

export default DatabaseConnectionPool