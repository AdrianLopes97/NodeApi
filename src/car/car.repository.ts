import { Car } from './car.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CarDto } from './viewModel/car.dto';

@EntityRepository(Car)
export class CarRepository extends Repository<Car> {

  createCar = async (carDto: CarDto): Promise<CarDto> => {
    const car: Car = this.create(carDto);
    await this.save(car);

    return carDto;
  }

  findOneCar = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateCar = async (id: string, carDto: CarDto) => {
    return this.save({ ...carDto, id: String(id) });
  };

  getAllCar = async () => {
    return this.find();
  };

  removeCar = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}