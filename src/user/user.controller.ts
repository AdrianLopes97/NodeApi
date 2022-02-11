import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserDto } from './viewModel/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('user')
export class UserController {

  constructor(
    @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
  ) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getAll() {
    return this.userRepository.GetAllUser();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.userRepository.findOneUser(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.userRepository.updateUser(id, userDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.userRepository.removeUser(id);
  }
  
}
