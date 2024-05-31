import ConfigManager from "./Singleton";

describe("ConfigManager Singleton", () => {
  it("should maintain a single instance", () => {
    const instance1 = ConfigManager.getInstance();
    const instance2 = ConfigManager.getInstance();

    expect(instance1).toBe(instance2);
  });

  it("should correctly set and get configuration values", () => {
    const config = ConfigManager.getInstance();
    config.setConfig("apiUrl", "https://api.example.com");
    expect(config.getConfig("apiUrl")).toBe("https://api.example.com");
  });
});
