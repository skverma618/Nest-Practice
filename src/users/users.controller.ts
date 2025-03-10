import { Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // GET /users - get all users
  // GET /users/:id - get one user
  // POST /users - create user
  // PATCH /users/:id - edit user

  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param(':id') id: string) {
    return '1';
  }

  @Patch()
  editOne() {
    return 'DONE';
  }
}
