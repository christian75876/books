import { Injectable } from '@nestjs/common';
import {
  CreateBookService,
  FindAllBooksService,
  updateBookService,
} from './services/book';
import { PaginationDto, UpdateBookDto, CreateBookDto } from './dto';
import { Book } from './entities';

@Injectable()
export class BookService {
  constructor(
    private readonly createBookService: CreateBookService,
    private readonly findAllBooksService: FindAllBooksService,
    private readonly updateBookService: updateBookService,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    return this.createBookService.create(createBookDto);
  }

  async findAlBooks(paginationDto: PaginationDto): Promise<Book[]> {
    return this.findAllBooksService.findAllBooks(paginationDto);
  }

  async updateBook(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    return this.updateBookService.updateBook(id, updateBookDto);
  }
}
