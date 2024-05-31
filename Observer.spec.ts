import { UserEventManager, UserNotifier, LoggingService } from "./Observer";

describe("Observer Pattern", () => {
  it("should notify observers of user events", () => {
    const eventManager = new UserEventManager();
    const notifier = new UserNotifier();
    const logger = new LoggingService();

    console.log = jest.fn();

    eventManager.subscribe("login", notifier);
    eventManager.subscribe("login", logger);

    eventManager.notify("login", { user: "JohnDoe" });

    expect(console.log).toHaveBeenCalledWith(
      'UserNotifier: login event received with data: {"user":"JohnDoe"}'
    );
    expect(console.log).toHaveBeenCalledWith(
      'LoggingService: login event logged with data: {"user":"JohnDoe"}'
    );
  });
});
