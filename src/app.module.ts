import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { AppInitializer } from './modules/app.initializer.service';
import { BookModule } from './modules/book/book.module';

@Module({
  imports: [DatabaseModule, BookModule],
  controllers: [],
  providers: [AppInitializer],
})
export class AppModule {}
