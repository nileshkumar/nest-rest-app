import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
  })
  @IsNotEmpty({ message: 'The user should have a name' })
  name: string;

  @ApiProperty({
    description: 'The name of the user',
  })
  @IsNotEmpty({ message: 'The user should have an email' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
  })
  @IsNotEmpty({ message: 'The user should have a password' })
  password: string;
}
