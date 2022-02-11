import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';
import { CarDto } from './viewModel/car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarRepository) private readonly carRepository: CarRepository,
  ) { }

  createCar = async (carDto: CarDto): Promise<CarDto> => {    
    return this.carRepository.createCar(carDto) 
  }

  findOneCar = async (id: string) => {
    return this.carRepository.findOneOrFail(id);
  };

  updateCar = async (id: string, carDto: CarDto) => {
    return this.carRepository.updateCar(id, carDto);
  };

  GetAllCar = async () => {
    return this.carRepository.find();
  };

  removeCar = async (id: string) => {
    return this.carRepository.removeCar(id);
  };
}
