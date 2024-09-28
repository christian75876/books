import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.schema';
import { CreateBookService } from './services/book/create-book.service';
import { Author, AuthorSchema } from './entities/author.schema';
import { Genres, GenresSchema } from './entities/genres.schema';
import { InsertGenresService } from './services/initializer/genres.initializer.service';
import { InsertAuthorservice } from './services/initializer/author.initializet.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
      {
        name: Author.name,
        schema: AuthorSchema,
      },
      {
        name: Genres.name,
        schema: GenresSchema,
      },
    ]),
  ],
  controllers: [BookController],
  providers: [
    BookService,
    CreateBookService,
    InsertGenresService,
    InsertAuthorservice,
  ],
  exports: [InsertGenresService, InsertAuthorservice],
})
export class BookModule {}
