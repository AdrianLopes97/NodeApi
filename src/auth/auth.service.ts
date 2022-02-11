import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../user/viewModel/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '../user/viewModel/user-login.dto';
import { UserDto } from '../user/viewModel/user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  register = async (userDto: CreateUserDto): Promise<RegistrationStatus> => {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.userService.createUser(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  login = async (loginUserDto: LoginUserDto): Promise<LoginStatus> => {
    // find user in db
    const user = await this.userService.findByLogin(loginUserDto);

    // generate and sign token
    const token = this._createToken(user);

    return {
      email: user.email,
      ...token,
    };
  }

  validateUser = async (payload: JwtPayload): Promise<UserDto> => {
    const user = await this.userService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ email }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN;

    const user: JwtPayload = { email };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn,
      accessToken,
    };
  }
}
