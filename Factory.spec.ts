import { MySQLConnectionFactory, PostgreSQLConnectionFactory } from "./Factory";

describe("ConnectionFactory", () => {
  it("should create a MySQL connection", () => {
    const factory = new MySQLConnectionFactory();
    expect(factory.getConnection()).toBe("Connected to MySQL");
  });

  it("should create a PostgreSQL connection", () => {
    const factory = new PostgreSQLConnectionFactory();
    expect(factory.getConnection()).toBe("Connected to PostgreSQL");
  });
});
