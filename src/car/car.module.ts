import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarController } from './car.controller';
import { Car } from './car.entity';
import { CarRepository } from './car.repository';
import { CarService } from './car.service';

@Module({
  imports: [TypeOrmModule.forFeature([Car, CarRepository])],
  controllers: [CarController],
  providers: [CarService],
  exports: [CarService]
})
export class CarModule {}
