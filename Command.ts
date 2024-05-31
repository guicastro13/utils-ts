interface Command {
  execute(): void;
}

class TurnOnLightCommand implements Command {
  public execute(): void {
    console.log("Light is turned on");
  }
}

class TurnOffLightCommand implements Command {
  public execute(): void {
    console.log("Light is turned off");
  }
}

class Invoker {
  private history: Command[] = [];

  public executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  public showHistory(): void {
    console.log("Command History:");
    for (const command of this.history) {
      console.log(command.constructor.name);
    }
  }
}

export { Command, TurnOnLightCommand, TurnOffLightCommand, Invoker };
