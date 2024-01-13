import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  userName: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
