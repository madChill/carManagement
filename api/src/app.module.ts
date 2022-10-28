import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { typeOrmConfig } from './services/database/typeorm.config';
import { ScansResultModule } from './modules/scans/scans.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    ConfigModule.forRoot(),
    UsersModule,
    CarsModule,
    ScansResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
