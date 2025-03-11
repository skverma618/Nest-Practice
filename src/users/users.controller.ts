import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  // GET /users - get all users
  // GET /users/:id - get one user
  // POST /users - create user
  // PATCH /users/:id - edit user

  constructor(private readonly userService: UsersService) {}

  @Get() // also handle query parameter => /users?role='value'& ---   they are different then param which are not optional
  findAll(@Query('role') role?: 'INTERN' | 'SDE' | 'MANAGER') {
    return this.userService.findAll(role);
  }

  @Get(':id') // id is a param and not a query parameter
  // findOne(@Param(':id') id: string) {  // id param is string but pipe (middleware) will parse it as an int
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post('create')
  // create(
  //   @Body()
  //   user: {
  //     name: string;
  //     email: string;
  //     role: 'INTERN' | 'SDE' | 'MANAGER';
  //   },
  // ) {
  // without DTOs
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Patch(':id')
  // editOne(@Param(':id', ParseIntPipe) id: number, @Body() userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'SDE' | 'MANAGER'}) {
  editOne(
    @Param(':id', ParseIntPipe) id: number,
    @Body() userUpdate: UpdateUserDto,
  ) {
    return { id, ...userUpdate };
  }
}
