import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseservice: DatabaseService) {}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    this.databaseservice.employee.create({
      // we do not need to use await with this prisma call as that has been written in the global database service,.
      data: createEmployeeDto,
    });
    return 'This action adds a new employee';
  }

  findAll(role?: 'INTERN' | 'SDE' | 'MANAGER') {
    return `This action returns all employees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
