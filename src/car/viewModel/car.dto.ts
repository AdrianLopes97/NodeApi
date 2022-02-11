import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CarDto {
  @IsNotEmpty()
  @ApiProperty()
  id: string;

  @IsNotEmpty()
  @ApiProperty()
  carname: string;

  @IsNotEmpty()
  @ApiProperty()
  model: string;

  @ApiProperty()
  createdOn?: Date;

  @ApiProperty()
  modelYear: Date;

  @IsNotEmpty()
  @ApiProperty()
  licensePlate: string;

}
