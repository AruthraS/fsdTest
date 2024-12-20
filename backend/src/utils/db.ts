import pg from "pg";
import db_config from "../configs/db";

class DB {
  connection: pg.Pool | null = null;
  connectDb() {
    this.connection = new pg.Pool(db_config);
    console.log("Connected to database");
    return this.connection;
  }
  async disconnectDb() {
    await this.connection?.end();
    this.connection = null;
    console.log("Disconnected from database");
  }
}

export default DB;
