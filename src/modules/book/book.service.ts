import { Injectable } from '@nestjs/common';
import { CreateBookService } from './services/book/create-book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.schema';
import { FindAllBooksService } from './services/book/find-all-books.service';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class BookService {
  constructor(
    private readonly createBookService: CreateBookService,
    private readonly findAllBooksService: FindAllBooksService,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.createBookService.create(createBookDto);
  }

  async findAlBooks(paginationDto: PaginationDto): Promise<Book[]> {
    return this.findAllBooksService.findAllBooks(paginationDto);
  }
}
