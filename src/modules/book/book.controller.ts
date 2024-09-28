import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.bookService.findAlBooks(paginationDto);
  }
}
