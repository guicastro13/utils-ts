interface Observer {
  update(eventType: string, data: any): void;
}

class UserNotifier implements Observer {
  public update(eventType: string, data: any): void {
    console.log(
      `UserNotifier: ${eventType} event received with data: ${JSON.stringify(
        data
      )}`
    );
  }
}

class LoggingService implements Observer {
  public update(eventType: string, data: any): void {
    console.log(
      `LoggingService: ${eventType} event logged with data: ${JSON.stringify(
        data
      )}`
    );
  }
}

class UserEventManager {
  private observers: { [key: string]: Observer[] } = {};

  public subscribe(eventType: string, observer: Observer): void {
    if (!this.observers[eventType]) {
      this.observers[eventType] = [];
    }
    this.observers[eventType].push(observer);
  }

  public unsubscribe(eventType: string, observer: Observer): void {
    const observerIndex = this.observers[eventType]?.indexOf(observer);
    if (observerIndex !== undefined && observerIndex > -1) {
      this.observers[eventType].splice(observerIndex, 1);
    }
  }

  public notify(eventType: string, data: any): void {
    if (this.observers[eventType]) {
      for (const observer of this.observers[eventType]) {
        observer.update(eventType, data);
      }
    }
  }
}

export { UserEventManager, UserNotifier, LoggingService };
