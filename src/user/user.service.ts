import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './viewModel/user.create.dto';
import { UserDto } from './viewModel/user.dto';
import { LoginUserDto } from './viewModel/user-login.dto';

@Injectable()
export class UserService {
 
  constructor(
    @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
  ) { }

  createUser = async (userDto: CreateUserDto): Promise<UserDto> => {    
    return this.userRepository.createUser(userDto) 
  }
  findByLogin = async ({ email, password }: LoginUserDto): Promise<UserDto> => {
    return this.userRepository.findByLogin({ email, password });
  }

  findOneUser = async (id: string) => {
    return this.userRepository.findOneOrFail(id);
  };

  updateUser = async (id: string, userDto: UserDto) => {
    return this.userRepository.updateUser(id, userDto);
  };

  GetAllUser = async () => {
    return this.userRepository.find();
  };

  removeUser = async (id: string) => {
    return this.userRepository.removeUser(id);
  };

  findByPayload = async ({ email }: any): Promise<UserDto> => {
    return this.userRepository.findByPayload(email);
  };
}
