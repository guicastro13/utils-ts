interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  public operation(): string {
    return "Result of ConcreteProductA";
  }
}

class ConcreteProductB implements Product {
  public operation(): string {
    return "Result of ConcreteProductB";
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreatorA extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

export { Creator, ConcreteCreatorA, ConcreteCreatorB };
