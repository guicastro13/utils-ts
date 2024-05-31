class ConfigManager {
  private static instance: ConfigManager;
  private config: { [key: string]: any } = {};

  private constructor() {}

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  public setConfig(key: string, value: any): void {
    this.config[key] = value;
  }

  public getConfig(key: string): any {
    return this.config[key];
  }
}

export default ConfigManager;
