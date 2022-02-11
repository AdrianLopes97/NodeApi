import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  createdOn?: Date;

  @ApiProperty()
  birthdate: Date;

  @IsNotEmpty()
  @ApiProperty()
  cpf: string;

  @IsNotEmpty()
  @ApiProperty()
  rg: string;

  @ApiProperty()
  telefone: string;
}
