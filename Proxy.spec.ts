import { RealDatabase, DatabaseProxy } from "./Proxy";

describe("Proxy Pattern", () => {
  it("should control access to the database", () => {
    const realDatabase = new RealDatabase();
    const adminProxy = new DatabaseProxy(realDatabase, "admin");
    const userProxy = new DatabaseProxy(realDatabase, "user");

    expect(adminProxy.query("SELECT * FROM users")).toBe(
      "Executing query: SELECT * FROM users"
    );
    expect(userProxy.query("SELECT * FROM users")).toBe("Access denied");
  });
});
