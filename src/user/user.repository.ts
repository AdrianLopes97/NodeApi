import { User } from './user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './viewModel/user.dto';
import { LoginUserDto } from './viewModel/user-login.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './viewModel/user.create.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  createUser = async (userDto: CreateUserDto): Promise<UserDto> => {
    const { email } = userDto;

    // check if the user exists in the db    
    const userInDb = await this.findOne({ where: { email } });
    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: User = this.create(userDto);
    await this.save(user);

    let userDtoResponse: UserDto = {
      id: user.id,
      username: user.username,
      email: user.email,
      createdOn: user.createdOn,
      birthdate: user.birthdate,
      cpf: user.cpf,
      rg: user.rg,
      telefone: user.telefone
    };

    return userDtoResponse
  }

  findByLogin = async ({ email, password }: LoginUserDto): Promise<UserDto> => {
    const user = await this.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await bcrypt.compare(password, user.password);
    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    let userDtoResponse: UserDto = {
      id: user.id,
      username: user.username,
      email: user.email,
      createdOn: user.createdOn,
      birthdate: user.birthdate,
      cpf: user.cpf,
      rg: user.rg,
      telefone: user.telefone
    };

    return userDtoResponse
  }

  findOneUser = async (id: string) => {
    return this.findOneOrFail(id);
  };

  updateUser = async (id: string, userDto: UserDto) => {
    return this.save({ ...userDto, id: String(id) });
  };

  GetAllUser = async () => {
    return this.find();
  };

  removeUser = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };

  findByPayload = async (email: string): Promise<UserDto> => {
    return this.findOne({ where: { email: email } });
  }
}