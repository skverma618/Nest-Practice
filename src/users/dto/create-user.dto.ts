import { IsEmail, IsEnum, isEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from 'src/enums/role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'SDE', 'MANAGER'], {
    message: 'Invalid role! Allowed values are: INTERN, SDE, MANAGER',
  })
  role: 'INTERN' | 'SDE' | 'MANAGER';

  //   @IsEnum(Role, {
  //     message: 'Invalid role! Allowed values are: INTERN, SDE, MANAGER',
  //   })
  //   role: Role;
}
