import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('DatabaseConnection');
  app.setGlobalPrefix('api/v1');

  try {
    await app.listen(3002);
    logger.log('Nest application listening on port 3002');

    const configService = app.get(ConfigService);
    configService.get('database.uri')
      ? logger.log('Connected to MongoDB')
      : logger.error('Failed to connect to MongoDB');
  } catch (error) {
    logger.error(
      `Failed to start Nest application: ${error.message}`,
      error.stack,
    );
  }
}

bootstrap();
