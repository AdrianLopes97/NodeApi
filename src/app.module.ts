import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './typeorm/ormconfig';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CarModule } from './car/car.module';

//TODO: CORRIGIR PARA O ENV
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
    CoreModule,
    CarModule,
  ],
})
export class AppModule {}
