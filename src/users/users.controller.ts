import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users - get all users
  // GET /users/:id - get one user
  // POST /users - create user
  // PATCH /users/:id - edit user

  @Get() // also handle query parameter => /users?role='value'&---   they are different then param which are not optional
  findAll(@Query('role') role?: 'Intern' | 'SDE' | 'Manager') {
    return [role];
  }

  @Get(':id') // id is a param and not a query parameter
  findOne(@Param(':id') id: string) {
    return '1';
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  editOne(@Param(':id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }
}
