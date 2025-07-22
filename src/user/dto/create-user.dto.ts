import { IsString, IsEmail, IsAlphanumeric } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  email: string;  

  @IsString()
  name: string;

  @IsAlphanumeric()
  password: string;
}

