import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger as logger} from '@nestjs/common';
import { HttpErrorFilter } from './common/filters/error-filter.filters';
import { globalValidationPipes } from './common/pipes/global-pipes.pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(globalValidationPipes);
  app.setGlobalPrefix('api');
  app.useGlobalFilters(new HttpErrorFilter());
  await app.listen(process.env.PORT || 4300);
  logger.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
