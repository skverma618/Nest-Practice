🔹 Understanding Decorators in Nest.js
In Nest.js, decorators are special functions prefixed with @ that add metadata to classes, methods, and properties.

They are used to define routes, dependencies, validation, and more in Nest.js.

✅ 1. How Do Decorators Work?
Decorators wrap around a class, method, or property to modify its behavior.

Example of a simple method decorator:

ts
Copy
Edit
function MyDecorator() {
return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
console.log(`Decorating method: ${propertyKey}`);
};
}

class Example {
@MyDecorator()
myMethod() {
console.log("Executing method...");
}
}

const obj = new Example();
obj.myMethod();
// Output:
// Decorating method: myMethod
// Executing method...
Here, @MyDecorator() modifies myMethod() by logging extra info.

✅ 2. Types of Decorators in Nest.js
📌 1. Class Decorators (Used for Controllers, Services, etc.)
Apply metadata to a class.
Example: @Controller(), @Injectable()
ts
Copy
Edit
import { Controller } from '@nestjs/common';

@Controller('users') // This sets the base route to "/users"
export class UserController {
// Your methods here...
}
📌 2. Method Decorators (Used for defining API routes)
Apply metadata to methods.
Example: @Get(), @Post(), @Put(), @Delete()
ts
Copy
Edit
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
@Get() // Handles GET requests at "/products"
getAllProducts() {
return ['Product 1', 'Product 2'];
}
}
📌 3. Parameter Decorators (Used for extracting request data)
Example: @Param(), @Body(), @Query()
ts
Copy
Edit
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
@Get(':id') // Handles GET requests like "/users/1"
getUser(@Param('id') id: string) {
return `User ID: ${id}`;
}
}
📌 4. Property Decorators (Used in Dependency Injection)
Example: @Inject()
ts
Copy
Edit
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
getData() {
return "Hello from MyService!";
}
}
✅ 3. Why Are Decorators Important in Nest.js?
✅ Simplifies Code: Makes Nest.js highly readable.
✅ Encapsulation: Adds metadata to classes & methods without modifying core logic.
✅ Powerful & Flexible: Used for routing, dependency injection, middleware, and more.
