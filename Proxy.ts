interface Database {
  query(sql: string): string;
}

class RealDatabase implements Database {
  public query(sql: string): string {
    return `Executing query: ${sql}`;
  }
}

class DatabaseProxy implements Database {
  private realDatabase: RealDatabase;
  private userRole: string;

  constructor(realDatabase: RealDatabase, userRole: string) {
    this.realDatabase = realDatabase;
    this.userRole = userRole;
  }

  public query(sql: string): string {
    if (this.userRole !== "admin") {
      return "Access denied";
    }
    return this.realDatabase.query(sql);
  }
}

export { Database, RealDatabase, DatabaseProxy };
