import { AuthModule } from '../auth/auth.module';
import { SwaggerDocumentOptions  } from './ISwaggerDocumentOptions ';
import { UserModule } from '../user/user.module';
import { CarModule } from 'src/car/car.module';

export const configSwagger:  SwaggerDocumentOptions = {
  include: [UserModule,AuthModule,CarModule],
}