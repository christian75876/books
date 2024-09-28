import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.schema';
import { Author, AuthorSchema, Genres, GenresSchema } from './entities';
import {
  CreateBookService,
  DeleteBookByIdService,
  FindAllBooksService,
  FindBookByIdService,
  updateBookService,
} from './services/book';
import {
  InsertAuthorservice,
  InsertGenresService,
} from './services/initializer';

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
    FindAllBooksService,
    updateBookService,
    FindBookByIdService,
    DeleteBookByIdService,
  ],
  exports: [InsertGenresService, InsertAuthorservice],
})
export class BookModule {}
