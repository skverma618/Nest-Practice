# NestJS Overview

Express.js is minimalist and unopinionated. It does not enforce MVC pattern, unlike NestJS which enforces both MVC and TypeScript usage.

### Getting Started

Install NestJS CLI globally and create a new project:

`npm i -g @nestjs/cli
nest new project-name`

`nest g module users // to create a new directoy with a user module in the src directory`

all these newly created modules are linked back and imported in app.module.ts file of src directory.

`nest g controller users // to create controller and test file`

`nest g service users`

- Controller is more of a route handler. The core business logic is written in service provider which we just call inside the controller.
- The main idea of Provider is that it can injected as a dependency.
- Pipes - pipes are a special type of middleware. have 2 usecase. Validation and transformation (transform input data to desired form). WE HAVE 9 built-in pipes in Nest.js
  example: ParseIntPipe - it converts the string param to number. If the string is not a number, it will just return error. Usecase: example id of user sent in param, it is string.

`npm run start:dev`
have a --watch flag, which acts like nodemon and restart server on new changes. THat is why we have this flag only in dev script.

`npm i @nestjs/mapped-types -D`
to use PartialType method in creating DTOs, we need to install mapped types

## Class Validator and Transformer

`npm i --save class-validator class-transformer`

List of all kind of validators:

https://github.com/typestack/class-validator#validation-decorators

### DTO (DATA TRANSFER OBJECTS):

DTO is an object that determines how data is transfered over network. Kind of a schema for the data

🔹 Understanding Decorators in Nest.js
In Nest.js, decorators are special functions prefixed with @ that add metadata to classes, methods, and properties.

They are used to define routes, dependencies, validation, and more in Nest.js.

## Decorators

✅ 1. How Do Decorators Work?
Decorators wrap around a class, method, or property to modify its behavior.

Example of a simple method decorator:
`
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
`
Here, @MyDecorator() modifies myMethod() by logging extra info.

✅ 2. Types of Decorators in Nest.js
📌 1. Class Decorators (Used for Controllers, Services, etc.)
Apply metadata to a class.

Example: @Controller(), @Injectable()

`
import { Controller } from '@nestjs/common';

@Controller('users') // This sets the base route to "/users"
export class UserController {
// Your methods here...
}
`

📌 2. Method Decorators (Used for defining API routes)
Apply metadata to methods.
Example: @Get(), @Post(), @Put(), @Delete()

`
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
@Get() // Handles GET requests at "/products"
getAllProducts() {
return ['Product 1', 'Product 2'];
}
}
`
📌 3. Parameter Decorators (Used for extracting request data)
Example: @Param(), @Body(), @Query()

`
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
@Get(':id') // Handles GET requests like "/users/1"
getUser(@Param('id') id: string) {
return `User ID: ${id}`;
}
}
`
📌 4. Property Decorators (Used in Dependency Injection)
Example: @Inject()

`
import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
getData() {
return "Hello from MyService!";
}
}
`
✅ 3. Why Are Decorators Important in Nest.js?
✅ Simplifies Code: Makes Nest.js highly readable.
✅ Encapsulation: Adds metadata to classes & methods without modifying core logic.
✅ Powerful & Flexible: Used for routing, dependency injection, middleware, and more.
