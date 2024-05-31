import { Subject, ConcreteObserverA, ConcreteObserverB } from "./Observer";

describe("Observer Pattern", () => {
  it("should notify observers", () => {
    const subject = new Subject();

    const observer1 = new ConcreteObserverA();
    const observer2 = new ConcreteObserverB();

    subject.attach(observer1);
    subject.attach(observer2);

    console.log = jest.fn();

    subject.someBusinessLogic();

    expect(console.log).toHaveBeenCalled();
  });
});
