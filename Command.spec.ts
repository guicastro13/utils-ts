import { Invoker, TurnOnLightCommand, TurnOffLightCommand } from "./Command";

describe("Command Pattern", () => {
  it("should execute and record commands", () => {
    console.log = jest.fn();

    const invoker = new Invoker();
    const turnOnCommand = new TurnOnLightCommand();
    const turnOffCommand = new TurnOffLightCommand();

    invoker.executeCommand(turnOnCommand);
    invoker.executeCommand(turnOffCommand);

    invoker.showHistory();

    expect(console.log).toHaveBeenCalledWith("Light is turned on");
    expect(console.log).toHaveBeenCalledWith("Light is turned off");
    expect(console.log).toHaveBeenCalledWith("Command History:");
    expect(console.log).toHaveBeenCalledWith("TurnOnLightCommand");
    expect(console.log).toHaveBeenCalledWith("TurnOffLightCommand");
  });
});
