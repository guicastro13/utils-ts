interface DatabaseConnection {
  connect(): string;
}

class MySQLConnection implements DatabaseConnection {
  public connect(): string {
    return "Connected to MySQL";
  }
}

class PostgreSQLConnection implements DatabaseConnection {
  public connect(): string {
    return "Connected to PostgreSQL";
  }
}

abstract class ConnectionFactory {
  public abstract createConnection(): DatabaseConnection;

  public getConnection(): string {
    const connection = this.createConnection();
    return connection.connect();
  }
}

class MySQLConnectionFactory extends ConnectionFactory {
  public createConnection(): DatabaseConnection {
    return new MySQLConnection();
  }
}

class PostgreSQLConnectionFactory extends ConnectionFactory {
  public createConnection(): DatabaseConnection {
    return new PostgreSQLConnection();
  }
}

export {
  ConnectionFactory,
  MySQLConnectionFactory,
  PostgreSQLConnectionFactory,
};
