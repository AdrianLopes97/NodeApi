import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CarDto } from './viewModel/car.dto';

@ApiTags('car')
@Controller('car')
export class CarController {
  constructor(
    private readonly carService: CarService,
  ) { }

  @Post()
  // @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() carDto: CarDto) {
    return this.carService.createCar(carDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getAll() {
    return this.carService.GetAllCar();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.carService.findOneCar(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() carDto: CarDto) {
    return this.carService.updateCar(id, carDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.carService.removeCar(id);
  }
}
