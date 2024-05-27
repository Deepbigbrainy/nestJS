import { registerAs } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig = registerAs(
  'database',
  (): MongooseModuleOptions => ({
    uri: 'mongodb://127.0.0.1:27017/nestJS-demo',
  }),
);
