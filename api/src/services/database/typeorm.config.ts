import { ConfigService } from '@nestjs/config';

export const typeOrmConfig = (configService: ConfigService) => {
  return {
    type: configService.get('DB_TYPE'),
    database: configService.get('DB_DATABASE'),
    host: configService.get('DB_HOST') || 'localhost',
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USER'),
    password: configService.get('DB_PASS'),
    synchronize: true,
    logging: true,
    entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  };
};
