# Decorators
 
TypeScript decorators are a feature that allows you to annotate or modify classes and class members (properties, methods, accessors, etc.) at design time. Decorators are a form of metaprogramming, enabling you to add metadata or behavior to classes and their members. They are prefixed with the @ symbol and can be attached to classes, methods, accessors, properties, or parameters.
 
TypeScript provides several built-in decorators like @classDecorator, @methodDecorator, @propertyDecorator, and @parameterDecorator.
 
However, it's important to note that decorator support in TypeScript is still experimental, and the syntax and behavior might evolve in future TypeScript versions.
 
## Method Decorators
 
Method decorators in TypeScript are decorators that can be applied to methods within a class. They allow you to modify the behavior of methods or add metadata to them at design time. Method decorators are prefixed with the @ symbol and are typically defined as functions that accept three parameters:
 
- **target:** The prototype of the class for instance methods, or the constructor function of the class for static methods.
- **propertyKey:** The name of the method being decorated.
- **descriptor:** An object that describes the property being decorated. It includes information such as the method's value, whether it's writable, enumerable, and configurable.
 
## Example
 
```ts
// Decorator function
function log(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    // Save a reference to the original method
    const originalMethod = descriptor.value;
 
    // Check if the method exists
    if (typeof originalMethod === 'function') {
        // Modify the descriptor's value to wrap the original method
        descriptor.value = function(...args: any[]) {
            // Log before executing the method
            console.log(`Calling ${key} with arguments:`, args);
 
            // Call the original method with the provided arguments and context
            const result = originalMethod.apply(this, args);
 
            // Log after executing the method
            console.log(`${key} returned:`, result);
 
            // Return the result
            return result;
        };
    }
 
    // Return the modified descriptor
    return descriptor;
}
 
class MyClass {
    // Apply the 'log' decorator to the method
    @log
    myMethod(arg1: string, arg2: number): string {
        return `Hello ${arg1}, ${arg2}`;
    }
}
 
const instance = new MyClass();
instance.myMethod('World', 42);
 
```
