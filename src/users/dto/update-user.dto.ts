import { CreateUserDto } from "./create-user.dto";
import { PartialType } from '@nestjs/mapped-types'

export class UpdateUserDto extends PartialType(CreateUserDto) { } // now any one particular field is not required, all are optional