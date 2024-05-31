import { ConcreteCreatorA, ConcreteCreatorB } from "./Factory";

describe("Factory Method Pattern", () => {
  it("should create ConcreteProductA", () => {
    const creator = new ConcreteCreatorA();
    expect(creator.someOperation()).toBe(
      "Creator: The same creator's code has just worked with Result of ConcreteProductA"
    );
  });

  it("should create ConcreteProductB", () => {
    const creator = new ConcreteCreatorB();
    expect(creator.someOperation()).toBe(
      "Creator: The same creator's code has just worked with Result of ConcreteProductB"
    );
  });
});
